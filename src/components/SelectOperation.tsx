import React, {useState, useEffect, useRef} from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/app/utils/helpers"

interface SelectOperatinProps {
    setOperation: (operation: string) => void;
}

const Operations: string[] = [
    "derivative",
    "integral"
]

const transitionDuration = 500

const SelectOperatin: React.FC<SelectOperatinProps> = ({setOperation}) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [touchStart, setTouchStart] = useState<number | null>(null)
    const [touchEnd, setTouchEnd] = useState<number | null>(null)
    const carouselRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        setOperation(Operations[currentIndex]);
    }, [currentIndex, setOperation]);

    const goToNext = () => {
        setCurrentIndex((currentIndex + 1) % Operations.length);
    }
    const goToPrev = () => {
        setCurrentIndex((currentIndex - 1 + Operations.length) % Operations.length);
    }

    const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
        goToNext()
    } else if (isRightSwipe) {
        goToPrev()
    }

    setTouchStart(null)
    setTouchEnd(null)
    }

    return (
        <div className='flex justify-between items-center w-fit mx-auto'>
            <div
                className={cn("relative w-full overflow-hidden rounded-lg")}
                ref={carouselRef}
                onTouchEnd={handleTouchEnd}
            >
                <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                    transitionDuration: `${transitionDuration}ms`,
                }}
                >
                {Operations.map((item, index) => (
                    <div key={index} className="min-w-full px-6 py-12 flex flex-col items-center justify-center text-center">
                    {item && <h3 className={cn("text-xl font-semibold mb-3")}>{item.toUpperCase()}</h3>}
                    </div>
                ))}
                </div>
        
                {/* Navigation Controls */}
                <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
                    <button
                    onClick={goToPrev}
                    className="p-2 rounded-full bg-white-mode-light-blue hover:bg-white-mode-blue dark:bg-blue-500 dark:hover:bg-blue-700 text-white shadow-md hover:bg-background ml-2 pointer-events-auto"
                    aria-label="Previous slide"
                    >
                    <ChevronLeft className="h-5 w-5" />
                    </button>
        
                    <button
                    onClick={goToNext}
                    className="p-2 rounded-full bg-white-mode-light-blue hover:bg-white-mode-blue dark:bg-blue-500 dark:hover:bg-blue-700 text-white shadow-md hover:bg-background mr-2 pointer-events-auto"
                    aria-label="Next slide"
                    >
                    <ChevronRight className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};


export default SelectOperatin;