"use client"
import Image from 'next/image';
import Spline from '@splinetool/react-spline';
import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import { headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation } from '@/public/config/motion';

import state from '@/store';
import { threejsImg } from '@/assets';
import { CustomButton } from '@/components';
import Customizer from '@/pages/Customizer';
import CanvasModel from '@/canvas';

{/* <Spline scene="https://prod.spline.design/e44rjJ05q1kpv8mk/scene.splinecode" /> */ }
export default function HomePage() {
    const snap = useSnapshot(state);

    return (
        <AnimatePresence>
            {snap.intro && (
                <motion.section className='home' {...slideAnimation('left')} >
                    <motion.header {...slideAnimation('down')}  >
                        <Image src={threejsImg} alt="logo" className="w-14" />
                    </motion.header>
                    <motion.div className='home-content' {...headContainerAnimation} >
                        <motion.div {...headTextAnimation}>
                            <h1 className='head-text' >
                                LET'S <br className='xl:block hidden' />
                                DO IT
                            </h1>
                        </motion.div>
                        <motion.div {...headContainerAnimation} className='flex flex-col gap-5' >
                            <p className='max-w-md font-normal text-white text-base mix-blend-difference' > Create your unique and exclusive shirt with our brand-new 3D customization tool. <strong>
                                Unleash your imagination</strong>{" "} and define your style </p>
                            <CustomButton type="filled" title="Customize it" handleClick={() => state.intro = false} customStyles="w-fit px-4 py-2.5 font-bold text-sm" />
                        </motion.div>
                    </motion.div>
                </motion.section>

            )}
        </AnimatePresence>
    )
}