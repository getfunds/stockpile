import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { useState, FC, MouseEvent } from 'react';
import styles from "../../styles/Transitions.module.css";

interface ISlide {
    image: string;
    badge: string;
    title: string;
    description: string;
}

interface ICarouselProps {
    data: ISlide[];
}

const Carousel: FC<ICarouselProps> = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const goToSlide = (index: number) => {
        setActiveIndex(index);
    }

    const goToPrevSlide = () => {
        let index = activeIndex;
        let slides = data.length;
        let slide = index < 1 ? slides - 1 : index - 1;

        setActiveIndex(slide);
    }

    const goToNextSlide = () => {
        let index = activeIndex;
        let slides = data.length;
        let slide = (index === slides - 1) ? 0 : index + 1;

        setActiveIndex(slide);
    }

    return (
        <div className="relative mt-12 rounded-xl mr-auto ml-auto overflow-hidden w-10/12 h-96">
            {data.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute top-0 right-0 bottom-0 left-0 bg-cover bg-center transition-opacity duration-500 ease-in-out ${index === activeIndex ? 'opacity-100 z-0' : 'opacity-0 z-0'}`}
                    style={{ backgroundImage: `url(${slide.image})` }}
                >
                    <div className="absolute top-0 right-0 bottom-0 left-0 bg-black opacity-50" />
                    <div className="p-8 absolute bottom-0 left-0 text-white">
                        <span className="inline-block py-2 px-4 mb-4 text-sm font-semibold text-white bg-transparent border border-white rounded-md">{slide.badge}</span>
                        <h2 className="text-4xl font-extrabold font-technorblack mb-2">{slide.title}</h2>
                        <p className="text-lg font-rubik mb-2">{slide.description}</p>
                        <div className="flex items-center">
                            <button onClick={goToPrevSlide}>
                                <IconChevronLeft className="text-white text-4xl cursor-pointer" />
                            </button>
                            <div className="mx-4">
                                {data.map((slide, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToSlide(index)}
                                        className={`inline-block mx-2 mb-4 w-2 h-2 bg-transparent rounded-full border ${index === activeIndex ? 'border-white bg-white' : 'border-white bg-transparent'}`}
                                    />
                                ))}
                            </div>
                            <button onClick={goToNextSlide}>
                                <IconChevronRight className="text-white text-4xl cursor-pointer" />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Carousel;