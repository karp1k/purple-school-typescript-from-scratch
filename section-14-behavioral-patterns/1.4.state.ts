export {};

class DocumentItem {
    public text: string;
    public state: DocumentItemState;


    constructor(text: string) {
        this.text = text;
        this.setState(new DraftDocumentItemState());
    }

    setState(state: DocumentItemState) {
        this.state = state;
        this.state.setContext(this);
    }

    publish() {
        this.state.publish()
    }

    delete() {
        this.state.delete();
    }
}

abstract class DocumentItemState {
    protected name: string;
    protected context: DocumentItem;

    abstract publish(): void;
    abstract delete(): void;

    setContext(documentItem: DocumentItem) {
        this.context = documentItem;
    }
}

class DraftDocumentItemState extends DocumentItemState {

    delete(): void {
        console.log("document deleted")
    }

    publish(): void {
        console.log(`document '${this.context.text}' published`)
        this.context.setState(new PublishDocumentItemState());
    }

}

class PublishDocumentItemState extends DocumentItemState {

    delete(): void {
        console.log("unpublish document...")
        this.context.setState(new DraftDocumentItemState());
    }

    publish(): void {
        console.log("document is already published")
    }

}

const documentItem = new DocumentItem("some interesting article");
console.log(documentItem.state)
documentItem.publish();
console.log(documentItem.state)
documentItem.publish();
documentItem.delete();
console.log(documentItem.state)
documentItem.delete();
console.log(documentItem.state);
