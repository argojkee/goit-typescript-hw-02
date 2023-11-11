/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface PropsT {
  title: string;
}

class Component<T extends PropsT> {
  constructor(public props: T) {}
}

class Page extends Component<{ title: string }> {
  pageInfo() {
    console.log(this.props.title);
  }
}
