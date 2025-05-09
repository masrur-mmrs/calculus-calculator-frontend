import React from 'react';
// import Image from 'next/image';
const UnauthorizedPage: React.FC = ({}) => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center mt-20">
                401 Unauthorized
            </h1>
            <p className="text-center mt-4">
                You do not have permission to access this page.
            </p>
            <p className="text-center mt-2">
                Please contact the administrator if you believe this is an error.
            </p>
            {/* <div className="flex justify-center mt-10">
                <Image
                    src={"/images/unauthorized.png"}
                    alt="Unauthorized"
                    className="w-1/2 h-auto"
                />
            </div> */}
        </div>
    );
};


export default UnauthorizedPage;