import React from "react";
import TWRowGrid from "../tailwind/TWRowGrid";
import TWContainer from "../tailwind/TWContainer";

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

const SectionBase = ({ children, layout, title, text }: SectionBaseProps) => {
    return (
        <div className={`py-32 ${layout === SectionBaseLayout.ImageLeft ? 'bg-emerald-light': 'bg-white'}`}>
            <TWContainer>
                <TWRowGrid>
                    <div
                        className={
                            [
                                'my-auto',
                                'lg:col-span-7',
                                layout === SectionBaseLayout.ImageRight
                                    ? 'lg:col-start-6 lg:order-2'
                                    : 'lg:col-start-1 lg:order-1',

                            ].join(' ')
                        }
                    >
                        {children}
                    </div>
                    <div
                        className={
                            [
                                'my-auto',
                                'lg:col-span-4',
                                layout === SectionBaseLayout.ImageLeft
                                    ? 'lg:col-start-9 lg:order-2'
                                    : 'lg:col-start-1 lg:order-1',
                            ].join(' ')
                        }

                    >
                        <div className="flex flex-col">
                            <h2 className="text-h3 mb-8">
                                {title}
                            </h2>
                            <span className="text-h6">
                            {text}
                        </span>
                        </div>
                    </div>
                </TWRowGrid>
            </TWContainer>
        </div>
    )
}

export {SectionBase, SectionBaseLayout}
