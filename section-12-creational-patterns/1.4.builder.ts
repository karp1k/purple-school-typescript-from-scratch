enum ImageFormat {
    Png = "png",
    Jpeg = "jpeg"
}

interface Resolution {
    width: number;
    height: number;
}

interface ImageConverter extends Resolution{
    format: ImageFormat
}

class ImageBuilder {

    private formats: ImageFormat[] = [];
    private resolutions: Resolution[] = [];

    addPng() {
        if (this.formats.includes(ImageFormat.Png)) {
            return this;
        }
        this.formats.push(ImageFormat.Png)
        return this;
    }

    addJpeg() {
        if (this.formats.includes(ImageFormat.Jpeg)) {
            return this;
        }
        this.formats.push(ImageFormat.Jpeg)
        return this;
    }

    addResolution(width: number, height: number) {
        this.resolutions.push({width, height});
        return this;
    }

    build(): ImageConverter[] {
        const res: ImageConverter[] = []
        for (const r of this.resolutions) {
            for (const f of this.formats) {
                res.push({
                    format: f,
                    width: r.width,
                    height: r.height
                })
            }
        }
        return res;
    }

}

console.log(new ImageBuilder()
    .addJpeg()
    .addResolution(10, 10)
    .addPng()
    .addPng()
    .addResolution(20, 20)
    .addResolution(40, 40)
    .build())


export {};