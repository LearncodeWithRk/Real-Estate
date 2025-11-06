import { WHATSAPP_LINK } from "@/lib/constants";
import { Button, type ButtonProps } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps extends ButtonProps {
  message: string;
  prefilledMessage?: string;
}

export function WhatsAppButton({ message, prefilledMessage, className, ...props }: WhatsAppButtonProps) {
  const textParam = prefilledMessage ? `&text=${encodeURIComponent(prefilledMessage)}` : (WHATSAPP_LINK.includes('&text=') ? '' : '&text=');
  const url = `${WHATSAPP_LINK}${textParam}`;

  return (
    <Button asChild className={cn("bg-green-500 hover:bg-green-600 text-white", className)} {...props}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <MessageCircle className="mr-2 h-5 w-5" />
        {message}
      </a>
    </Button>
  );
}
