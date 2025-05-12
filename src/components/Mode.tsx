"use client"

import type { Variants } from "motion/react"
import * as motion from "motion/react-client"
import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/redux/store"
import { clearInputTex } from "@/redux/slices/inputTexSlice"

export default function Variants() {
    const [isOpen, setIsOpen] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)
    const { height } = useDimensions(containerRef)
    const modes = ["basic", "derivative", "integral"]

    return (
        <div>
            <div style={container}>
                <motion.nav
                    initial={false}
                    animate={isOpen ? "open" : "closed"}
                    custom={height}
                    ref={containerRef}
                    style={nav}
                >
                    <motion.div style={background} variants={sidebarVariants} />
                    {isOpen&&<Navigation show={isOpen} toggle={() => setIsOpen(!isOpen)} modes={modes}/>}
                    {/* <Navigation show={isOpen} toggle={() => setIsOpen(!isOpen)} modes={modes}/> */}
                    <MenuToggle toggle={() => setIsOpen(!isOpen)} />
                </motion.nav>
            </div>
        </div>
    )
}

const navVariants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
}

const Navigation = ({ modes, show, toggle } : { modes: string[], show: boolean, toggle: () => void }) => (
    <motion.ul style={list} variants={navVariants}>
        {modes.map((m, i) => (
            <MenuItem i={i} m={m} key={i} show={show} toggle={toggle} />
        ))}
    </motion.ul>
)

// const itemVariants = {
//     open: {
//         y: 0,
//         opacity: 1,
//         transition: {
//             y: { stiffness: 1000, velocity: -100 },
//             delay: 0.2
//         },
//     },
//     closed: {
//         y: 50,
//         opacity: 0,
//         transition: {
//             y: { stiffness: 1000 },
//             delay: 0.2
//         },
//     },
// }

// const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"]

const MenuItem = ({ m, i, show, toggle }: { m: string, i: number, show: boolean, toggle: () => void }) => {
    const router  = useRouter();
    const dispatch = useDispatch<AppDispatch>()
    return (
            <motion.div>
                <motion.li
                    style={listItem}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ 
                        y: show ? 0 : 50,
                        opacity: show ? 1 : 0,
                        transition: {
                            y: { stiffness: 1000, velocity: -100 },
                        }
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                        router.push(m);
                        dispatch(clearInputTex());
                        toggle();
                    }}
                    key={i}
                >
                    {m.toUpperCase()}
                </motion.li>
            </motion.div>
        )
}

const sidebarVariants = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2,
        },
    }),
    closed: {
        clipPath: "circle(30px at 40px 40px)",
        transition: {
            delay: 0.2,
            type: "spring",
            stiffness: 400,
            damping: 40,
        },
    },
}

interface PathProps {
    d?: string
    variants: Variants
    transition?: { duration: number }
}

const Path = (props: PathProps) => (
    <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="white"
        strokeLinecap="round"
        {...props}
    />
)

const MenuToggle = ({ toggle }: { toggle: () => void }) => (
    <button style={toggleContainer} onClick={toggle}>
        <svg width="23" height="23" viewBox="0 0 23 23">
            <Path
                variants={{
                    closed: { d: "M 2 2.5 L 20 2.5" },
                    open: { d: "M 3 16.5 L 17 2.5" },
                }}
            />
            <Path
                d="M 2 9.423 L 20 9.423"
                variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                }}
                transition={{ duration: 0.1 }}
            />
            <Path
                variants={{
                    closed: { d: "M 2 16.346 L 20 16.346" },
                    open: { d: "M 3 2.5 L 17 16.346" },
                }}
            />
        </svg>
    </button>
)

/**
 * ==============   Styles   ================
 */

const container: React.CSSProperties = {
    position: "absolute",
    display: "flex",
    top: 0,
    left: 0,
    // zIndex: 50,
    justifyContent: "flex-start",
    alignItems: "stretch",
    flex: 1,
    width: "100%",
    maxWidth: "100%",
    height: "100vh",
    backgroundColor: "var(--accent)",
    borderRadius: 20,
    overflow: "hidden",
}

const nav: React.CSSProperties = {
    width: "50vw",
    height: "100%"
}

const background: React.CSSProperties = {
    backgroundColor: "#2b7fff",
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    zIndex: 10,
    width: "50vw",
    height: "100vh"
}

const toggleContainer: React.CSSProperties = {
    outline: "none",
    border: "none",
    WebkitUserSelect: "none",
    MozUserSelect: "none",
    cursor: "pointer",
    position: "relative",
    top: 18,
    left: 28,
    width: 50,
    height: 50,
    borderRadius: "50%",
    background: "transparent",
    zIndex: 20,
}

const list: React.CSSProperties = {
    listStyle: "none",
    padding: 25,
    margin: 0,
    position: "absolute",
    top: 80,
    width: 230,
    zIndex: 20,
}

const listItem: React.CSSProperties = {
    display: "flex",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 2,
    margin: 20,
    listStyle: "none",
    marginBottom: 20,
    marginLeft: 50,
    marginRight: 30,
    cursor: "pointer",
    border: "2px solid white",
    borderRadius: 8,
}

/**
 * ==============   Utils   ================
 */

// Naive implementation - in reality would want to attach
// a window or resize listener. Also use state/layoutEffect instead of ref/effect
// if this is important to know on initial client render.
// It would be safer to  return null for unmeasured states.
const useDimensions = (ref: React.RefObject<HTMLDivElement | null>) => {
    const dimensions = useRef({ width: 0, height: 0 })

    useEffect(() => {
        if (ref.current) {
            dimensions.current.width = ref.current.offsetWidth
            dimensions.current.height = ref.current.offsetHeight
        }
    }, [ref])

    return dimensions.current
}
