export interface WidgetFields {
  route: string;
  firstName?: string;
  lastName?: string;
  online?: boolean;
  lastVisit?: number;
  communityName?: string;
}

export interface WidgetProps {
  title: string;
  items: WidgetFields[];
}

export interface OnlineProps {
  color: string;
  fontSize: number;
}
