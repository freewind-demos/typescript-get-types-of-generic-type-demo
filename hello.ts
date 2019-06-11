type Entry<K, V> = {
  key: K,
  value: V
}

type FirstType<X> = X extends Entry<infer T, infer K> ? T : never;
type SecondType<X> = X extends Entry<infer T, infer K> ? K : never;


class P<X extends Entry<any, any>> {
  constructor(private entry: X) {
  }

  getKey(): FirstType<X> {
    return this.entry.key
  }

  getValue(): SecondType<X> {
    return this.entry.value;
  }
}

const hello = new P<Entry<string, number>>({key: 'aaa', value: 111});

console.log(hello.getKey())
console.log(hello.getValue());

