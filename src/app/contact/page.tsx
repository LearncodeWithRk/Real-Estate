import { ContactForm } from './contact-form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { Mail, MapPin, Phone } from 'lucide-react';
import { APP_NAME } from '@/lib/constants';

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-6xl py-16 px-4">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Get In Touch</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto text-muted-foreground">
          We're here to help. Reach out with any questions or to schedule a viewing.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
            <Card className="bg-primary/5">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                        <Phone className="w-6 h-6 text-primary" />
                        Contact Details
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-muted-foreground">
                    <p className="flex items-center gap-2"><MapPin className="w-4 h-4" /> 123 Real Estate Ave, Realty City</p>
                    <p className="flex items-center gap-2"><Mail className="w-4 h-4" /> contact@homeview.com</p>
                    <p className="flex items-center gap-2"><Phone className="w-4 h-4" /> (555) 123-4567</p>
                </CardContent>
            </Card>

            <Card className="bg-accent/10">
                <CardHeader>
                    <CardTitle>Easiest Way to Get in Touch</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">Need help or want to book a viewing? Message us on WhatsApp!</p>
                    <WhatsAppButton 
                        message="Chat on WhatsApp"
                        className="w-full"
                    />
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
