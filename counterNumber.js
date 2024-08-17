const singleCounterContainer = document.querySelector(".counters");

const counterItems = singleCounterContainer.querySelectorAll(".counter");
const counterSpans = singleCounterContainer.querySelectorAll("span");

let activated = false;

    window.addEventListener("scroll", () => {

        if (
            window.scrollY > singleCounterContainer.offsetTop - singleCounterContainer.offsetHeight - 200 && 
            !activated
        ) {
            counterItems.forEach((item, i) => {

                item.style.animation = "fadeUp 600ms ease-in-out forwards";
                item.style.animationDelay = 0.2 * i + "s";
            });

            counterSpans.forEach(counter => {
                counter.innerText = 0;

                let count = 0;

                function updateCount() {
                    const target = parseInt(counter.dataset.count);
                    const speed = parseInt(counter.dataset.speed);

                    if (count < target) {
                        count++;
                        counter.innerText = count;
                        setTimeout(updateCount, speed);
                    } else {
                        counter.innerText = target;
                    }
                }
                updateCount();
            });

            activated = true;
        } else if (
            window.scrollY < singleCounterContainer.offsetTop - singleCounterContainer.offsetHeight - 500 ||
            window.scrollY === 0 && activated
        ) {
            counterSpans.forEach(counter => counter.innerText = 0);

            counterItems.forEach(item => item.style.animation = "none");

            activated = false;
        }
    });