# Terraform

Infrastructure as Code for cloud resources.

## Prerequisites

- [Terraform](https://terraform.io) v1.5+
- Cloud provider CLI configured (AWS/GCP/Azure)

## Quick Start

### 1. Initialize

```bash
cd infra/terraform

terraform init
```

### 2. Plan

```bash
terraform plan -out=tfplan
```

### 3. Apply

```bash
terraform apply tfplan
```

## Structure

```
infra/terraform/
├── main.tf           # Main configuration
├── variables.tf      # Input variables
├── outputs.tf        # Output values
├── providers.tf      # Provider configuration
├── modules/
│   ├── networking/   # VPC, subnets, etc.
│   ├── database/     # RDS/Supabase
│   ├── redis/        # Elasticache/Upstash
│   └── storage/      # S3/R2 buckets
└── environments/
    ├── dev/
    ├── staging/
    └── prod/
```

## Environment Configuration

### Development

```bash
cd environments/dev
terraform init
terraform apply
```

### Production

```bash
cd environments/prod
terraform init
terraform apply -var-file="prod.tfvars"
```

## Variables

Create `terraform.tfvars`:

```hcl
environment = "production"
region      = "us-east-1"

database = {
  instance_class = "db.t3.medium"
  storage_gb     = 100
}

redis = {
  node_type = "cache.t3.micro"
}
```

## State Management

Using remote state with S3/GCS:

```hcl
terraform {
  backend "s3" {
    bucket = "nebutra-terraform-state"
    key    = "prod/terraform.tfstate"
    region = "us-east-1"
  }
}
```

## Outputs

After apply:

```bash
terraform output database_url
terraform output redis_url
terraform output r2_bucket_name
```

## Destroy

```bash
terraform destroy
```

⚠️ **Warning**: This will delete all resources. Use with caution.

## Related

- [Cloudflare config](../cloudflare/) — CDN and DNS
- [Database config](../database/) — RLS policies
