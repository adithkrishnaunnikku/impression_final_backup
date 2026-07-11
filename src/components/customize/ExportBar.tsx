import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { useCardDesign, encodeDesignForUrl } from "@/hooks/use-card-design";

const OWNER_WHATSAPP_NUMBER = "911234567890";

export function ExportBar({ svgRef: _svgRef }: { svgRef: React.RefObject<SVGSVGElement | null> }) {
  const { state, undo, redo, canUndo, canRedo } = useCardDesign();
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    setShareUrl(`${window.location.origin}${window.location.pathname}?design=${encodeDesignForUrl(state)}`);
  }, [state]);

  const shareMessage = `Hi! Here's my wedding card design for ${state.groom} & ${state.bride} — could you take a look? ${shareUrl}`;

  const whatsappHref = shareUrl
    ? `https://wa.me/${OWNER_WHATSAPP_NUMBER}?text=${encodeURIComponent(shareMessage)}`
    : undefined;

  return (
    <div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link
          to="/shop"
          className="flex-1 rounded-full border border-foreground px-5 py-3 text-center text-sm font-semibold transition-transform duration-150 active:scale-[0.97]"
        >
          Browse ready-made
        </Link>
        {/* Share on WhatsApp button — commented out per user request (2026-07-11). Uncomment to restore.
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-disabled={!whatsappHref}
          className="flex-1 rounded-full bg-foreground px-5 py-3 text-center text-sm font-semibold text-background transition-transform duration-150 active:scale-[0.97] aria-disabled:pointer-events-none aria-disabled:opacity-60"
        >
          Share on WhatsApp
        </a>
        */}
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs">
        <div className="flex gap-3">
          <button type="button" onClick={undo} disabled={!canUndo} className="underline opacity-70 disabled:opacity-30">
            Undo
          </button>
          <button type="button" onClick={redo} disabled={!canRedo} className="underline opacity-70 disabled:opacity-30">
            Redo
          </button>
        </div>
      </div>

      <p className="mt-3 min-h-5 text-center text-xs opacity-70" role="status" aria-live="polite">
        Share your design with us and we'll prepare it for print — direct downloads aren't available here. Your
        progress is saved automatically.
      </p>
    </div>
  );
}