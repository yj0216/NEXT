import Link from 'next/link'
import React from 'react'

export default function FirstPost() {
    return (
        <>
            <div>First Post</div>
            <h2>
                <Link href='/'>Back to home</Link>
            </h2>
        </>
    )
}
