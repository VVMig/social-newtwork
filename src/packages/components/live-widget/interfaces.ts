export interface WidgetProps {
  viewIcon: JSX.Element;
  sendIcon: JSX.Element;
}

export interface StreamHeaderProps {
  viewIcon: JSX.Element;
}

export interface ChatProps {
  sendIcon: JSX.Element;
}

export interface MessageProps {
  text: string;
  displayName: string;
  date: number;
  route: string;
}
