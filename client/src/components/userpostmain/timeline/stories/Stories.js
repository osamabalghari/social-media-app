import React from 'react'

const Stories = () => {
    return (
        <div class="mt-5 d-flex justify-content-between position-relative">

            <div
                class="mx-1 bg-white rounded story"
                type="button"
                style={{ width: "6em", height: "190px" }}

            >
                <img
                    src="https://source.unsplash.com/collection/happy-people"
                    class="card-img-top"
                    alt="story posts"
                    style={{ minHeight: "125px", objectFit: "cover" }}
                />
                <div
                    class="d-flex align-items-center justify-content-center position-relative"
                    style={{ minHeight: "65px" }}
                >
                    <p class="mb-0 text-center fs-7 fw-bold">Create Story</p>
                    <div
                        class="position-absolute top-0 start-50 translate-middle"
                    >
                        <i
                            class="fas fa-plus-circle fs-3 text-primary bg-white p-1 rounded-circle"
                        ></i>
                    </div>
                </div>
            </div>

            <div
                class="rounded mx-1 story"
                type="button"
                style={{ width: "6em", height: "190px" }}
            >
                <img
                    src="https://source.unsplash.com/random/2"
                    class="card-img-top rounded"
                    alt="story posts"
                    style={{ minHeight: "190px", objectFit: "cover" }}

                />
            </div>

            <div
                class="rounded mx-1 story"
                type="button"
                style={{ width: "6em", height: "190px" }}
            >
                <img
                    src="https://source.unsplash.com/random/3"
                    class="card-img-top rounded"
                    alt="story posts"
                    style={{ minHeight: "190px", objectFit: "cover" }}
                />
            </div>

            <div
                class="rounded mx-1 story"
                type="button"
                style={{ width: "6em", height: "190px" }}
            >
                <img
                    src="https://source.unsplash.com/random/4"
                    class="card-img-top rounded"
                    alt="story posts"
                    style={{ minHeight: "190px", objectFit: "cover" }}
                />
            </div>

            <div
                class="d-none d-lg-block rounded mx-1 story"
                type="button"
                style={{ width: "6em", height: "190px" }}
            >
                <img
                    src="https://source.unsplash.com/random/5"
                    class="card-img-top rounded"
                    alt="story posts"
                    style={{ minHeight: "190px", objectFit: "cover" }}
                />
            </div>

            <div
                class="d-none d-lg-block rounded mx-1 story"
                type="button"
                style={{ width: "6em", height: "190px" }}
            >
                <img
                    src="https://source.unsplash.com/random/6"
                    class="card-img-top rounded"
                    alt="story posts"
                    style={{ minHeight: "190px", objectFit: "cover" }}
                />
            </div>

            <div
                class="position-absolute top-50 start-100 translate-middle pointer d-none d-lg-block"
            >
                <i
                    class="fas fa-arrow-right p-3 border text-muted bg-white rounded-circle"
                ></i>
            </div>
        </div>
    )
}

export default Stories