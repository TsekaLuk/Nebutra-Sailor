-- ============================================
-- Nebutra-Sailor Row Level Security Policies
-- Multi-tenant isolation via organization_id
-- ============================================

-- Enable RLS on all tables
ALTER TABLE organizations ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE content ENABLE ROW LEVEL SECURITY;
ALTER TABLE content_translations ENABLE ROW LEVEL SECURITY;
ALTER TABLE embeddings ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE tenant_usage ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_activity ENABLE ROW LEVEL SECURITY;
ALTER TABLE wallets ENABLE ROW LEVEL SECURITY;
ALTER TABLE nfts ENABLE ROW LEVEL SECURITY;
ALTER TABLE integrations ENABLE ROW LEVEL SECURITY;

-- ============================================
-- Helper function to get current user's org
-- ============================================
CREATE OR REPLACE FUNCTION auth.organization_id()
RETURNS UUID AS $$
  SELECT COALESCE(
    -- From JWT claim (Clerk)
    (current_setting('request.jwt.claims', true)::jsonb->>'org_id')::uuid,
    -- From request header (API Gateway)
    (current_setting('request.headers', true)::jsonb->>'x-tenant-id')::uuid
  );
$$ LANGUAGE SQL STABLE;

CREATE OR REPLACE FUNCTION auth.user_id()
RETURNS UUID AS $$
  SELECT (current_setting('request.jwt.claims', true)::jsonb->>'sub')::uuid;
$$ LANGUAGE SQL STABLE;

CREATE OR REPLACE FUNCTION auth.user_role()
RETURNS TEXT AS $$
  SELECT COALESCE(
    current_setting('request.jwt.claims', true)::jsonb->>'role',
    'MEMBER'
  );
$$ LANGUAGE SQL STABLE;

-- ============================================
-- ORGANIZATIONS POLICIES
-- ============================================
CREATE POLICY "Users can view their organization"
  ON organizations FOR SELECT
  USING (id = auth.organization_id());

CREATE POLICY "Only owners can update organization"
  ON organizations FOR UPDATE
  USING (id = auth.organization_id() AND auth.user_role() = 'OWNER');

-- ============================================
-- USERS POLICIES
-- ============================================
CREATE POLICY "Users can view members of their organization"
  ON users FOR SELECT
  USING (organization_id = auth.organization_id());

CREATE POLICY "Users can update their own profile"
  ON users FOR UPDATE
  USING (id = auth.user_id());

CREATE POLICY "Admins can manage users in their organization"
  ON users FOR ALL
  USING (
    organization_id = auth.organization_id() 
    AND auth.user_role() IN ('OWNER', 'ADMIN')
  );

-- ============================================
-- CONTENT POLICIES
-- ============================================
CREATE POLICY "Users can view published content in their organization"
  ON content FOR SELECT
  USING (
    organization_id = auth.organization_id()
    AND (status = 'PUBLISHED' OR author_id = auth.user_id())
  );

CREATE POLICY "Users can create content in their organization"
  ON content FOR INSERT
  WITH CHECK (organization_id = auth.organization_id());

CREATE POLICY "Users can update their own content"
  ON content FOR UPDATE
  USING (author_id = auth.user_id());

CREATE POLICY "Users can delete their own content"
  ON content FOR DELETE
  USING (author_id = auth.user_id());

CREATE POLICY "Admins can manage all content in their organization"
  ON content FOR ALL
  USING (
    organization_id = auth.organization_id()
    AND auth.user_role() IN ('OWNER', 'ADMIN')
  );

-- ============================================
-- CONTENT TRANSLATIONS POLICIES
-- ============================================
CREATE POLICY "Users can view translations of accessible content"
  ON content_translations FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM content c 
      WHERE c.id = content_id 
      AND c.organization_id = auth.organization_id()
    )
  );

CREATE POLICY "Users can manage translations of their content"
  ON content_translations FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM content c 
      WHERE c.id = content_id 
      AND c.author_id = auth.user_id()
    )
  );

-- ============================================
-- EMBEDDINGS POLICIES
-- ============================================
CREATE POLICY "Users can view embeddings in their organization"
  ON embeddings FOR SELECT
  USING (organization_id = auth.organization_id());

CREATE POLICY "System can manage embeddings"
  ON embeddings FOR ALL
  USING (organization_id = auth.organization_id());

-- ============================================
-- PRODUCTS POLICIES
-- ============================================
CREATE POLICY "Users can view products in their organization"
  ON products FOR SELECT
  USING (organization_id = auth.organization_id());

CREATE POLICY "Admins can manage products"
  ON products FOR ALL
  USING (
    organization_id = auth.organization_id()
    AND auth.user_role() IN ('OWNER', 'ADMIN')
  );

-- ============================================
-- ORDERS POLICIES
-- ============================================
CREATE POLICY "Users can view their own orders"
  ON orders FOR SELECT
  USING (
    organization_id = auth.organization_id()
    AND (user_id = auth.user_id() OR auth.user_role() IN ('OWNER', 'ADMIN'))
  );

CREATE POLICY "Users can create orders"
  ON orders FOR INSERT
  WITH CHECK (organization_id = auth.organization_id());

CREATE POLICY "Admins can manage all orders"
  ON orders FOR ALL
  USING (
    organization_id = auth.organization_id()
    AND auth.user_role() IN ('OWNER', 'ADMIN')
  );

-- ============================================
-- TENANT USAGE POLICIES
-- ============================================
CREATE POLICY "Admins can view tenant usage"
  ON tenant_usage FOR SELECT
  USING (
    organization_id = auth.organization_id()
    AND auth.user_role() IN ('OWNER', 'ADMIN')
  );

CREATE POLICY "System can manage tenant usage"
  ON tenant_usage FOR ALL
  USING (organization_id = auth.organization_id());

-- ============================================
-- USER ACTIVITY POLICIES
-- ============================================
CREATE POLICY "Users can view activity in their organization"
  ON user_activity FOR SELECT
  USING (organization_id = auth.organization_id());

CREATE POLICY "System can insert activity"
  ON user_activity FOR INSERT
  WITH CHECK (organization_id = auth.organization_id());

-- ============================================
-- WALLETS POLICIES
-- ============================================
CREATE POLICY "Users can view wallets in their organization"
  ON wallets FOR SELECT
  USING (organization_id = auth.organization_id());

CREATE POLICY "Users can manage their own wallets"
  ON wallets FOR ALL
  USING (user_id = auth.user_id());

-- ============================================
-- NFTS POLICIES
-- ============================================
CREATE POLICY "Users can view NFTs in their organization"
  ON nfts FOR SELECT
  USING (organization_id = auth.organization_id());

CREATE POLICY "Users can manage NFTs in their wallets"
  ON nfts FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM wallets w 
      WHERE w.id = wallet_id 
      AND w.user_id = auth.user_id()
    )
  );

-- ============================================
-- INTEGRATIONS POLICIES
-- ============================================
CREATE POLICY "Admins can view integrations"
  ON integrations FOR SELECT
  USING (
    organization_id = auth.organization_id()
    AND auth.user_role() IN ('OWNER', 'ADMIN')
  );

CREATE POLICY "Only owners can manage integrations"
  ON integrations FOR ALL
  USING (
    organization_id = auth.organization_id()
    AND auth.user_role() = 'OWNER'
  );

-- ============================================
-- SERVICE ROLE BYPASS
-- For API Gateway / Backend services
-- ============================================
-- Note: Service role automatically bypasses RLS
-- Use service_role key only from trusted backend services
