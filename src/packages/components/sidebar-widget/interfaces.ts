export interface WidgetItemFields {
  route: string;
  firstName?: string;
  lastName?: string;
  online?: boolean;
  lastVisit?: number;
  communityName?: string;
}

export interface WidgetProps {
  title: string;
  items: WidgetItemFields[];
}