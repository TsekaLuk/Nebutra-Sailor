-- ============================================
-- Row Level Security (RLS) Policies
-- Multi-tenant isolation by organization_id
-- ============================================

-- Enable RLS on all tenant-scoped tables
ALTER TABLE contents ENABLE ROW LEVEL SECURITY;
ALTER TABLE content_translations ENABLE ROW LEVEL SECURITY;
ALTER TABLE content_embeddings ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE integrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE wallets ENABLE ROW LEVEL SECURITY;
ALTER TABLE nfts ENABLE ROW LEVEL SECURITY;
ALTER TABLE tenant_usage ENABLE ROW LEVEL SECURITY;

-- ============================================
-- Helper function: Get current tenant from JWT
-- ============================================
CREATE OR REPLACE FUNCTION auth.tenant_id()
RETURNS TEXT AS $$
  SELECT COALESCE(
    current_setting('app.current_tenant_id', true),
    (current_setting('request.jwt.claims', true)::json->>'org_id')
  );
$$ LANGUAGE SQL STABLE;

-- ============================================
-- Contents
-- ============================================
CREATE POLICY "tenant_isolation" ON contents
  FOR ALL
  USING (organization_id = auth.tenant_id())
  WITH CHECK (organization_id = auth.tenant_id());

-- ============================================
-- Content Translations
-- ============================================
CREATE POLICY "tenant_isolation" ON content_translations
  FOR ALL
  USING (
    content_id IN (SELECT id FROM contents WHERE organization_id = auth.tenant_id())
  );

-- ============================================
-- Content Embeddings
-- ============================================
CREATE POLICY "tenant_isolation" ON content_embeddings
  FOR ALL
  USING (
    content_id IN (SELECT id FROM contents WHERE organization_id = auth.tenant_id())
  );

-- ============================================
-- Products
-- ============================================
CREATE POLICY "tenant_isolation" ON products
  FOR ALL
  USING (organization_id = auth.tenant_id())
  WITH CHECK (organization_id = auth.tenant_id());

-- ============================================
-- Orders
-- ============================================
CREATE POLICY "tenant_isolation" ON orders
  FOR ALL
  USING (organization_id = auth.tenant_id())
  WITH CHECK (organization_id = auth.tenant_id());

-- ============================================
-- Order Items
-- ============================================
CREATE POLICY "tenant_isolation" ON order_items
  FOR ALL
  USING (
    order_id IN (SELECT id FROM orders WHERE organization_id = auth.tenant_id())
  );

-- ============================================
-- Integrations
-- ============================================
CREATE POLICY "tenant_isolation" ON integrations
  FOR ALL
  USING (organization_id = auth.tenant_id())
  WITH CHECK (organization_id = auth.tenant_id());

-- ============================================
-- Wallets
-- ============================================
CREATE POLICY "tenant_isolation" ON wallets
  FOR ALL
  USING (organization_id = auth.tenant_id())
  WITH CHECK (organization_id = auth.tenant_id());

-- ============================================
-- NFTs
-- ============================================
CREATE POLICY "tenant_isolation" ON nfts
  FOR ALL
  USING (organization_id = auth.tenant_id())
  WITH CHECK (organization_id = auth.tenant_id());

-- ============================================
-- Tenant Usage
-- ============================================
CREATE POLICY "tenant_isolation" ON tenant_usage
  FOR ALL
  USING (organization_id = auth.tenant_id())
  WITH CHECK (organization_id = auth.tenant_id());

-- ============================================
-- Service role bypass (for backend services)
-- ============================================
-- Backend services should use service_role key which bypasses RLS
-- Or set: SET LOCAL role TO 'service_role';
