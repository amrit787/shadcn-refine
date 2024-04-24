import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';
import { PhoneCallIcon, User } from 'lucide-react';

export function UserPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="rounded-full" variant="outline">
          {' '}
          <User className="text-primary" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-4">
        <div>change pass</div>
      </PopoverContent>
    </Popover>
  );
}
