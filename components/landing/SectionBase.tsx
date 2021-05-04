import React from 'react';

enum SectionBaseLayout {
    ImageLeft = 'image_left',
    ImageRight = 'image_right'
}

interface SectionBaseProps {
    children: React.ReactNode,
    layout: SectionBaseLayout,
    title: string,
    text: string,
}

const SectionBase = ({children, }: SectionBaseProps) => {
    return (
        <div className="">

        </div>
    )
}

export {SectionBase, SectionBaseLayout}
