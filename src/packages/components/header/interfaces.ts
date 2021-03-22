export interface Tab {
  component: () => JSX.Element;
  title: string;
  route: string;
}

export interface TabProps {
  tabs: Tab[];
}
