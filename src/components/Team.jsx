'use client'
import {motion} from 'motion/react'

const Team = ()=>{

    return (
        <div>
            {/*heading*/}
            <div className={"flex flex-col items-center"}>
                <p className={"green-polygon flex items-center gap-2 font-[600]"}>Our Team</p>
                <motion.p className={"text-[40px] font-[600] text-center "}>
                    We bring a wealth of skills from a wide
                    range of backgrounds
                </motion.p>
            </div>


        </div>
    )

}

export default Team;