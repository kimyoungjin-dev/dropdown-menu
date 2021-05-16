export interface SubNavProps {
  title: string;
  path: string;
  icon: JSX.Element;
}

export interface ItemProps {
  title: string;
  path: string;
  icon: JSX.Element;
  iconClosed?: JSX.Element;
  iconOpened?: JSX.Element;
  subNav?: SubNavProps[];
}

export interface IProps {
  item: ItemProps;
}
