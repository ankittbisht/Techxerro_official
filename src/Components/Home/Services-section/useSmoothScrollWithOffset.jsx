import { useEffect } from "react";

const useSmoothScrollWithOffset = (offset) => {
  useEffect(() => {
        const handleAnchorClick = (event) => {
          const anchor = event.target.closest('a[href^="#"]');
          if (anchor) {
            event.preventDefault();
            const targetId = anchor.getAttribute('href').substring(1);

            console.log(targetId);

            const targetElement = document.getElementById(targetId);

            console.log(targetElement);

            if (targetElement) {
              const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
              console.log(elementPosition);
    console.log('a')
              console.log(elementPosition - offset);
              window.scrollTo({
                top: elementPosition - offset,
                behavior: 'smooth',
              });
            }
          }
        };

    // 2nd logic
    // const handleAnchorClick = (event) => {
    //   const anchor = event.target.closest('a[href^="#"]');
    //   if (anchor) {
    //     event.preventDefault();

    //     const targetId = anchor.getAttribute("href").substring(1);
    //     const targetElement = document.getElementById(targetId);
    //     const sectionElement = document.getElementById("service"); // Replace 'your-section-id' with the ID of your section

    //     if (targetElement && sectionElement) {
    //       const targetRect = targetElement.getBoundingClientRect();
    //       const sectionRect = sectionElement.getBoundingClientRect();

    //       const distance = targetRect.top - sectionRect.top;
    //       window.scrollTo({
    //         top: distance - offset,
    //         behavior: "smooth",
    //       });
    //     }
    //   }
    // };

    // const handleAnchorClick = (event) => {
    //   const anchor = event.target.closest('a[href^="#"]');
    //   if (anchor) {
    //     event.preventDefault();

    //     const targetId = anchor.getAttribute("href").substring(1);
    //     const targetElement = document.getElementById(targetId);

    //     if (targetElement) {
    //       const elementPosition = targetElement.offsetTop; // Calculate the top position of the target element
    //       window.scrollTo({
    //         top: elementPosition - offset,
    //         behavior: "smooth",
    //       });
    //     }
    //   }
    // };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, [offset]);
};

export default useSmoothScrollWithOffset;
