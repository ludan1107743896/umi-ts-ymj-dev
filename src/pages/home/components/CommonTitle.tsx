import React from 'react';

interface baseCommonTitle {
    title: string;
    content: string;
}

const CommonTitle: React.FC<baseCommonTitle> = ({
    title,
    content
}) => {
    return (
        <>
            <section style={{textAlign: "center", width: '578px',margin:" 0 auto", paddingTop: '60px'}}>
                <h1 style={{marginBottom: "20px"}}>{title}</h1>
                <p style={{marginBottom: "20px"}}>{content}</p>
            </section>
            <hr/>
        </>
    )
}

export default CommonTitle;