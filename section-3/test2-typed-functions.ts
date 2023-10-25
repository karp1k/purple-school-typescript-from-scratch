enum StatusEnum {
    PUBLISHED = "published",
    DRAFT = "draft",
    DELETED = "deleted"
}
async function getFaqs(req: {
    topicId: number,
    status?: StatusEnum
}): Promise<{
    question: string,
    answer: string,
    tags: string[],
    likes: number,
    status: StatusEnum
}[]> {
    const res = await fetch('/faqs', {
        method: 'POST',
        body: JSON.stringify(req)
    });
    const data: {
        question: string,
        answer: string,
        tags: string[],
        likes: number,
        status: StatusEnum
    }[] = await res.json();

    return data;
}

export {}