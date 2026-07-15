// الرواد للزجاج

document.addEventListener("DOMContentLoaded", () => {
    console.log("تم تحميل موقع الرواد للزجاج بنجاح");

        const buttons = document.querySelectorAll(".btn, .btn2");

            buttons.forEach(button => {
                    button.addEventListener("mouseenter", () => {
                                button.style.transform = "scale(1.05)";
                                        });

                                                button.addEventListener("mouseleave", () => {
                                                            button.style.transform = "scale(1)";
                                                                    });
                                                                        });
                                                                        });