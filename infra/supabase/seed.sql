-- ============================================
-- Nebutra-Sailor Seed Data
-- Development / Testing data
-- ============================================

-- Create a demo organization
INSERT INTO organizations (id, clerk_org_id, name, slug, plan) VALUES
  ('00000000-0000-0000-0000-000000000001', 'org_demo', 'Demo Organization', 'demo', 'PRO')
ON CONFLICT (id) DO NOTHING;

-- Create demo users
INSERT INTO users (id, clerk_user_id, organization_id, email, name, role) VALUES
  ('00000000-0000-0000-0000-000000000001', 'user_demo_owner', '00000000-0000-0000-0000-000000000001', 'owner@demo.com', 'Demo Owner', 'OWNER'),
  ('00000000-0000-0000-0000-000000000002', 'user_demo_admin', '00000000-0000-0000-0000-000000000001', 'admin@demo.com', 'Demo Admin', 'ADMIN'),
  ('00000000-0000-0000-0000-000000000003', 'user_demo_member', '00000000-0000-0000-0000-000000000001', 'member@demo.com', 'Demo Member', 'MEMBER')
ON CONFLICT (id) DO NOTHING;

-- Create demo content
INSERT INTO content (id, organization_id, author_id, type, title, body, status, published_at) VALUES
  ('00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000001', 'POST', 'Welcome to Nebutra', 'This is a demo post to showcase the platform.', 'PUBLISHED', NOW()),
  ('00000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000002', 'ARTICLE', 'Getting Started Guide', 'Learn how to use all the features of Nebutra Sailor.', 'PUBLISHED', NOW()),
  ('00000000-0000-0000-0000-000000000003', '00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000003', 'POST', 'Draft Post', 'This is a draft post that is not published yet.', 'DRAFT', NULL)
ON CONFLICT (id) DO NOTHING;

-- Create demo products
INSERT INTO products (id, organization_id, name, description, price, inventory_count, status) VALUES
  ('00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000001', 'Pro Subscription', 'Monthly Pro plan subscription', 29.99, 9999, 'ACTIVE'),
  ('00000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000000001', 'Enterprise Subscription', 'Monthly Enterprise plan subscription', 99.99, 9999, 'ACTIVE'),
  ('00000000-0000-0000-0000-000000000003', '00000000-0000-0000-0000-000000000001', 'API Credits Pack', '1000 additional API credits', 9.99, 100, 'ACTIVE')
ON CONFLICT (id) DO NOTHING;

-- Initialize tenant usage for current period
INSERT INTO tenant_usage (organization_id, period_start, period_end, api_calls, ai_tokens) VALUES
  ('00000000-0000-0000-0000-000000000001', DATE_TRUNC('month', NOW()), DATE_TRUNC('month', NOW()) + INTERVAL '1 month', 0, 0)
ON CONFLICT (organization_id, period_start) DO NOTHING;
