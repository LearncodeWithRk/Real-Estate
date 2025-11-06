import { WHATSAPP_LINK } from "@/lib/constants";
import { Button, type ButtonProps } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps extends ButtonProps {
  message: string;
  prefilledMessage?: string;
}

export function WhatsAppButton({ message, prefilledMessage, className, ...props }: WhatsAppButtonProps) {
  const url = prefilledMessage
    ? `${WHATSAPP_LINK}?text=${encodeURIComponent(prefilledMessage)}`
    : WHATSAPP_LINK;

  return (
    <Button asChild className={cn("bg-accent hover:bg-accent/90 text-accent-foreground", className)} {...props}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <MessageCircle className="mr-2 h-5 w-5" />
        {message}
      </a>
    </Button>
  );
}
