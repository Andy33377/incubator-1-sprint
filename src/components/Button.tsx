type propsType = {
  title: string;
};

export default function Button({ title }: propsType) {
  return <button>{title}</button>;
}
