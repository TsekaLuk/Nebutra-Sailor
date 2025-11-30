# ============================================
# Nebutra-Sailor Infrastructure
# ============================================

terraform {
  required_version = ">= 1.5.0"

  required_providers {
    vercel = {
      source  = "vercel/vercel"
      version = "~> 1.0"
    }
    # Uncomment when needed:
    # aws = {
    #   source  = "hashicorp/aws"
    #   version = "~> 5.0"
    # }
    # google = {
    #   source  = "hashicorp/google"
    #   version = "~> 5.0"
    # }
  }

  # Remote state (uncomment for production)
  # backend "s3" {
  #   bucket = "nebutra-terraform-state"
  #   key    = "sailor/terraform.tfstate"
  #   region = "us-east-1"
  # }
}

# ============================================
# Variables
# ============================================

variable "environment" {
  description = "Deployment environment"
  type        = string
  default     = "dev"

  validation {
    condition     = contains(["dev", "staging", "prod"], var.environment)
    error_message = "Environment must be dev, staging, or prod."
  }
}

variable "vercel_api_token" {
  description = "Vercel API token"
  type        = string
  sensitive   = true
}

variable "vercel_team_id" {
  description = "Vercel team ID (optional)"
  type        = string
  default     = null
}

# ============================================
# Providers
# ============================================

provider "vercel" {
  api_token = var.vercel_api_token
  team      = var.vercel_team_id
}

# ============================================
# Modules
# ============================================

# module "database" {
#   source      = "./modules/database"
#   environment = var.environment
# }

# module "redis" {
#   source      = "./modules/redis"
#   environment = var.environment
# }

# module "monitoring" {
#   source      = "./modules/monitoring"
#   environment = var.environment
# }
