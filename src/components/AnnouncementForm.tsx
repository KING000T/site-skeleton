import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Switch } from '@/components/ui/switch';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { Plus } from 'lucide-react';

interface AnnouncementFormProps {
  onSuccess: () => void;
}

export const AnnouncementForm = ({ onSuccess }: AnnouncementFormProps) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: 'academic',
    priority: 'normal',
    isPinned: false,
    downloadLink: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.from('announcements').insert({
        title: formData.title,
        content: formData.content,
        category: formData.category,
        priority: formData.priority,
        is_pinned: formData.isPinned,
        download_link: formData.downloadLink || null,
      });

      if (error) throw error;

      toast.success('Announcement created successfully');
      setFormData({
        title: '',
        content: '',
        category: 'academic',
        priority: 'normal',
        isPinned: false,
        downloadLink: '',
      });
      setOpen(false);
      onSuccess();
    } catch (error) {
      console.error('Error creating announcement:', error);
      toast.error('Failed to create announcement');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Announcement
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Create New Announcement</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
          </div>

          <div>
            <Label htmlFor="content">Content</Label>
            <Textarea
              id="content"
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              rows={5}
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="category">Category</Label>
              <Select
                value={formData.category}
                onValueChange={(value) => setFormData({ ...formData, category: value })}
              >
                <SelectTrigger id="category">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="academic">Academic</SelectItem>
                  <SelectItem value="exam">Exam</SelectItem>
                  <SelectItem value="holiday">Holiday</SelectItem>
                  <SelectItem value="important">Important</SelectItem>
                  <SelectItem value="event">Event</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="priority">Priority</Label>
              <Select
                value={formData.priority}
                onValueChange={(value) => setFormData({ ...formData, priority: value })}
              >
                <SelectTrigger id="priority">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="normal">Normal</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="downloadLink">Download Link (Optional)</Label>
            <Input
              id="downloadLink"
              type="url"
              value={formData.downloadLink}
              onChange={(e) => setFormData({ ...formData, downloadLink: e.target.value })}
              placeholder="https://..."
            />
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              id="isPinned"
              checked={formData.isPinned}
              onCheckedChange={(checked) => setFormData({ ...formData, isPinned: checked })}
            />
            <Label htmlFor="isPinned">Pin this announcement</Label>
          </div>

          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? 'Creating...' : 'Create Announcement'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
