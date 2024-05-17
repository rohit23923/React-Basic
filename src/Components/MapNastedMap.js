import React from 'react'

export const MapNastedMap = () => {
    const arr = [
        {
            title: "JavaScript",
            framework: [
                { name: "React.js" },
                { name: "Angular" },
                { name: "Vue.js" },
                { name: "Node.js" },
            ]
        },
        {
            title: "Python",
            framework: [
                { name: "Django" },
                { name: "Flask" },
                { name: "Pyramid" },
                { name: "PyTorch" },
            ]
        },
        {
            title: "Java",
            framework: [
                { name: "Spring" },
                { name: "Hibernate" },
                { name: "JavaServer Faces" },
            ]
        },
        {
            title: "C#",
            framework: [
                { name: "ASP.NET" },
                { name: "Entity Framework" },
                { name: "Xamarin" },
            ]
        },
        {
            title: "PHP",
            framework: [
                { name: "Laravel" },
                { name: "Symfony" },
                { name: "CodeIgniter" },
            ]
        },
    ]
    return (
        <div>

            <div>
                {
                    arr.map((item) => {
                        return (
                            <>
                                <div>
                                    <h1>{item.title}</h1>

                                    <div>
                                        {
                                            item.framework.map((item) => {
                                                return (
                                                    <>
                                                        <div className='topic'>
                                                            {item.name}
                                                        </div>
                                                    </>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </>
                        )
                    })
                }

            </div>

        </div>
    )
}
