// https://legacy.reactjs.org/blog/2016/07/13/mixins-considered-harmful.html --
// mixins - syntactic sugar trying to add multiple inheritance
// mixins - NOT RECOMMENDED better use Composition
// mixin function name starts from Upper letter
type Constructor = new (...args: any[]) => {};
type GConstructor<T = {}> = new (...args: any[]) => T; //<T = {}> default initialization nothing passed

class List {
    constructor(public items: string[]) {
    }
}

class Accordion {
    isOpened: boolean;
}

type ListType = GConstructor<List>;
type AccordionType = GConstructor<Accordion>;

class ExtendedListClass  extends List {

    first() {
        return this.items[0];
    }
}

function ExtendedList<TBase extends ListType & AccordionType>(Base: TBase) {
    return class ExtendedList extends Base {
        first() {
            return this.items[0];
        }
    }
}

class AccordionList {
    isOpened: boolean;
    constructor(public items: string[]) {
    }
}

const accordionList = ExtendedList(AccordionList);
const instanceList = new accordionList(["first", "second"]);
console.log(instanceList.first());
console.log(instanceList.isOpened);

export {};