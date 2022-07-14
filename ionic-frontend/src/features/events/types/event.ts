export interface Event{
    id: number;
    venue: string;
    title: string;
    start_date?: string;
    end_date?: string;
    photo: string;
    
}

export interface EventCardProps {
    
    title: string;
    startDate: string;
    endDate?: string;
    status?: string;
    imgUrl?: string;
  }