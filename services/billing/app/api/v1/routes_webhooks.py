"""
Webhook Routes

Stripe webhook handling.
"""

from fastapi import APIRouter, HTTPException, Request, Header
from typing import Optional
import stripe

from app.config import settings
from services.webhook_service import WebhookService


router = APIRouter()


@router.post("/stripe")
async def stripe_webhook(
    request: Request,
    stripe_signature: Optional[str] = Header(None, alias="Stripe-Signature"),
):
    """Handle Stripe webhook events"""
    if not stripe_signature:
        raise HTTPException(status_code=400, detail="Missing Stripe signature")
    
    payload = await request.body()
    
    try:
        # Verify webhook signature
        event = stripe.Webhook.construct_event(
            payload=payload,
            sig_header=stripe_signature,
            secret=settings.STRIPE_WEBHOOK_SECRET,
        )
    except ValueError:
        raise HTTPException(status_code=400, detail="Invalid payload")
    except stripe.SignatureVerificationError:
        raise HTTPException(status_code=400, detail="Invalid signature")
    
    # Process the event
    webhook_service = WebhookService()
    
    try:
        result = await webhook_service.handle_event(event)
        return {"received": True, "type": event["type"], "result": result}
    except Exception as e:
        # Log the error but return 200 to acknowledge receipt
        # Stripe will retry if we return an error
        print(f"Error processing webhook: {e}")
        return {"received": True, "type": event["type"], "error": str(e)}


@router.get("/stripe/events")
async def list_webhook_events(
    limit: int = 10,
    starting_after: Optional[str] = None,
):
    """List recent webhook events (for debugging)"""
    try:
        stripe.api_key = settings.STRIPE_SECRET_KEY
        events = stripe.Event.list(
            limit=limit,
            starting_after=starting_after,
        )
        return {
            "events": [
                {
                    "id": e.id,
                    "type": e.type,
                    "created": e.created,
                }
                for e in events.data
            ],
            "has_more": events.has_more,
        }
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
