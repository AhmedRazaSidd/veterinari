import React from 'react'

const Professionals = () => {
    return (
        <>
            <section className='bg-white'>
                <div className='container-fluid'>
                    <div className='d-flex w-100 align-items-center justify-content-between py-4 bg-white professional-title'>
                        <h3 className='mb-0 fw-bold'>Scopri i veterinari in evidenza</h3>
                        <button className='theme-btn-outline fw-bold'>Vedi tutti</button>
                    </div>
                </div>
            </section>
            <section>
                <div className='container-fluid'>
                    <div className='row pt-lg-5 pt-3 pb-lg-5 professionals-row'>
                        <div className='professional-cards'>
                            <div className='professional-profile'>
                                <img src="/professionals/profile1.png" alt="image" />
                            </div>
                            <div className='professional-rating'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M14.6562 7.14863L11.8375 9.60863L12.6818 13.2711C12.7265 13.4626 12.7138 13.663 12.6452 13.8472C12.5766 14.0315 12.4552 14.1914 12.2962 14.3071C12.1372 14.4227 11.9477 14.489 11.7512 14.4975C11.5548 14.5059 11.3602 14.4564 11.1918 14.3549L7.99747 12.4174L4.80996 14.3549C4.64157 14.4564 4.447 14.5059 4.25057 14.4975C4.05415 14.489 3.86459 14.4227 3.70559 14.3071C3.54659 14.1914 3.42521 14.0315 3.35662 13.8472C3.28803 13.663 3.27528 13.4626 3.31996 13.2711L4.16309 9.61238L1.34372 7.14863C1.1946 7.02002 1.08677 6.85024 1.03375 6.66059C0.980734 6.47094 0.98489 6.26986 1.0457 6.08257C1.10651 5.89527 1.22126 5.7301 1.37556 5.60776C1.52987 5.48542 1.71686 5.41137 1.91309 5.39488L5.62934 5.073L7.07997 1.613C7.15572 1.43145 7.2835 1.27637 7.44721 1.16729C7.61092 1.05821 7.80324 1 7.99997 1C8.19669 1 8.38901 1.05821 8.55272 1.16729C8.71643 1.27637 8.84421 1.43145 8.91997 1.613L10.375 5.073L14.09 5.39488C14.2862 5.41137 14.4732 5.48542 14.6275 5.60776C14.7818 5.7301 14.8966 5.89527 14.9574 6.08257C15.0182 6.26986 15.0223 6.47094 14.9693 6.66059C14.9163 6.85024 14.8085 7.02002 14.6593 7.14863H14.6562Z" fill="#FBB225" />
                                </svg>
                                <span className='professional-points'>4.9</span>
                                <p className='professional-session'>(2.3k recensioni)</p>
                            </div>
                            <div className='professional-details'>
                                <h4>Marco Bianchi</h4>
                                <p>Il Dr. Marco Bianchi è un veterinario con un'ampia esperienza nella cura dei cani e dei gatti. </p>
                                <span className='text-theme'>Prenota una visita</span>
                            </div>
                        </div>
                        <div className='professional-cards'>
                            <div className='professional-profile'>
                                <img src="/professionals/profile2.png" alt="image" />
                            </div>
                            <div className='professional-rating'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M14.6562 7.14863L11.8375 9.60863L12.6818 13.2711C12.7265 13.4626 12.7138 13.663 12.6452 13.8472C12.5766 14.0315 12.4552 14.1914 12.2962 14.3071C12.1372 14.4227 11.9477 14.489 11.7512 14.4975C11.5548 14.5059 11.3602 14.4564 11.1918 14.3549L7.99747 12.4174L4.80996 14.3549C4.64157 14.4564 4.447 14.5059 4.25057 14.4975C4.05415 14.489 3.86459 14.4227 3.70559 14.3071C3.54659 14.1914 3.42521 14.0315 3.35662 13.8472C3.28803 13.663 3.27528 13.4626 3.31996 13.2711L4.16309 9.61238L1.34372 7.14863C1.1946 7.02002 1.08677 6.85024 1.03375 6.66059C0.980734 6.47094 0.98489 6.26986 1.0457 6.08257C1.10651 5.89527 1.22126 5.7301 1.37556 5.60776C1.52987 5.48542 1.71686 5.41137 1.91309 5.39488L5.62934 5.073L7.07997 1.613C7.15572 1.43145 7.2835 1.27637 7.44721 1.16729C7.61092 1.05821 7.80324 1 7.99997 1C8.19669 1 8.38901 1.05821 8.55272 1.16729C8.71643 1.27637 8.84421 1.43145 8.91997 1.613L10.375 5.073L14.09 5.39488C14.2862 5.41137 14.4732 5.48542 14.6275 5.60776C14.7818 5.7301 14.8966 5.89527 14.9574 6.08257C15.0182 6.26986 15.0223 6.47094 14.9693 6.66059C14.9163 6.85024 14.8085 7.02002 14.6593 7.14863H14.6562Z" fill="#FBB225" />
                                </svg>
                                <span className='professional-points'>4.9</span>
                                <p className='professional-session'>(2.3k recensioni)</p>
                            </div>
                            <div className='professional-details'>
                                <h4>Luca Moretti</h4>
                                <p>Il Dr. Luca Moretti è un veterinario esperto nel campo dell'ortopedia veterinaria.</p>
                                <span className='text-theme'>Prenota una visita</span>
                            </div>
                        </div>
                        <div className='professional-cards'>
                            <div className='professional-profile'>
                                <img src="/professionals/profile3.png" alt="image" />
                            </div>
                            <div className='professional-rating'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M14.6562 7.14863L11.8375 9.60863L12.6818 13.2711C12.7265 13.4626 12.7138 13.663 12.6452 13.8472C12.5766 14.0315 12.4552 14.1914 12.2962 14.3071C12.1372 14.4227 11.9477 14.489 11.7512 14.4975C11.5548 14.5059 11.3602 14.4564 11.1918 14.3549L7.99747 12.4174L4.80996 14.3549C4.64157 14.4564 4.447 14.5059 4.25057 14.4975C4.05415 14.489 3.86459 14.4227 3.70559 14.3071C3.54659 14.1914 3.42521 14.0315 3.35662 13.8472C3.28803 13.663 3.27528 13.4626 3.31996 13.2711L4.16309 9.61238L1.34372 7.14863C1.1946 7.02002 1.08677 6.85024 1.03375 6.66059C0.980734 6.47094 0.98489 6.26986 1.0457 6.08257C1.10651 5.89527 1.22126 5.7301 1.37556 5.60776C1.52987 5.48542 1.71686 5.41137 1.91309 5.39488L5.62934 5.073L7.07997 1.613C7.15572 1.43145 7.2835 1.27637 7.44721 1.16729C7.61092 1.05821 7.80324 1 7.99997 1C8.19669 1 8.38901 1.05821 8.55272 1.16729C8.71643 1.27637 8.84421 1.43145 8.91997 1.613L10.375 5.073L14.09 5.39488C14.2862 5.41137 14.4732 5.48542 14.6275 5.60776C14.7818 5.7301 14.8966 5.89527 14.9574 6.08257C15.0182 6.26986 15.0223 6.47094 14.9693 6.66059C14.9163 6.85024 14.8085 7.02002 14.6593 7.14863H14.6562Z" fill="#FBB225" />
                                </svg>
                                <span className='professional-points'>4.9</span>
                                <p className='professional-session'>(2.3k recensioni)</p>
                            </div>
                            <div className='professional-details'>
                                <h4>Elena Rossi</h4>
                                <p>La Dr.ssa Elena Rossi è una veterinaria appassionata degli animali esotici.</p>
                                <span className='text-theme'>Prenota una visita</span>
                            </div>
                        </div>
                        <div className='professional-cards'>
                            <div className='professional-profile'>
                                <img src="/professionals/profile4.png" alt="image" />
                            </div>
                            <div className='professional-rating'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M14.6562 7.14863L11.8375 9.60863L12.6818 13.2711C12.7265 13.4626 12.7138 13.663 12.6452 13.8472C12.5766 14.0315 12.4552 14.1914 12.2962 14.3071C12.1372 14.4227 11.9477 14.489 11.7512 14.4975C11.5548 14.5059 11.3602 14.4564 11.1918 14.3549L7.99747 12.4174L4.80996 14.3549C4.64157 14.4564 4.447 14.5059 4.25057 14.4975C4.05415 14.489 3.86459 14.4227 3.70559 14.3071C3.54659 14.1914 3.42521 14.0315 3.35662 13.8472C3.28803 13.663 3.27528 13.4626 3.31996 13.2711L4.16309 9.61238L1.34372 7.14863C1.1946 7.02002 1.08677 6.85024 1.03375 6.66059C0.980734 6.47094 0.98489 6.26986 1.0457 6.08257C1.10651 5.89527 1.22126 5.7301 1.37556 5.60776C1.52987 5.48542 1.71686 5.41137 1.91309 5.39488L5.62934 5.073L7.07997 1.613C7.15572 1.43145 7.2835 1.27637 7.44721 1.16729C7.61092 1.05821 7.80324 1 7.99997 1C8.19669 1 8.38901 1.05821 8.55272 1.16729C8.71643 1.27637 8.84421 1.43145 8.91997 1.613L10.375 5.073L14.09 5.39488C14.2862 5.41137 14.4732 5.48542 14.6275 5.60776C14.7818 5.7301 14.8966 5.89527 14.9574 6.08257C15.0182 6.26986 15.0223 6.47094 14.9693 6.66059C14.9163 6.85024 14.8085 7.02002 14.6593 7.14863H14.6562Z" fill="#FBB225" />
                                </svg>
                                <span className='professional-points'>4.9</span>
                                <p className='professional-session'>(2.3k recensioni)</p>
                            </div>
                            <div className='professional-details'>
                                <h4>Matteo Ferrari</h4>
                                <p>Il Dr. Matteo Ferrari è un veterinario specializzato nella cura degli animali da compagnia.</p>
                                <span className='text-theme'>Prenota una visita</span>
                            </div>
                        </div>
                        <div className='professional-cards'>
                            <div className='professional-profile'>
                                <img src="/professionals/profile5.png" alt="image" />
                            </div>
                            <div className='professional-rating'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M14.6562 7.14863L11.8375 9.60863L12.6818 13.2711C12.7265 13.4626 12.7138 13.663 12.6452 13.8472C12.5766 14.0315 12.4552 14.1914 12.2962 14.3071C12.1372 14.4227 11.9477 14.489 11.7512 14.4975C11.5548 14.5059 11.3602 14.4564 11.1918 14.3549L7.99747 12.4174L4.80996 14.3549C4.64157 14.4564 4.447 14.5059 4.25057 14.4975C4.05415 14.489 3.86459 14.4227 3.70559 14.3071C3.54659 14.1914 3.42521 14.0315 3.35662 13.8472C3.28803 13.663 3.27528 13.4626 3.31996 13.2711L4.16309 9.61238L1.34372 7.14863C1.1946 7.02002 1.08677 6.85024 1.03375 6.66059C0.980734 6.47094 0.98489 6.26986 1.0457 6.08257C1.10651 5.89527 1.22126 5.7301 1.37556 5.60776C1.52987 5.48542 1.71686 5.41137 1.91309 5.39488L5.62934 5.073L7.07997 1.613C7.15572 1.43145 7.2835 1.27637 7.44721 1.16729C7.61092 1.05821 7.80324 1 7.99997 1C8.19669 1 8.38901 1.05821 8.55272 1.16729C8.71643 1.27637 8.84421 1.43145 8.91997 1.613L10.375 5.073L14.09 5.39488C14.2862 5.41137 14.4732 5.48542 14.6275 5.60776C14.7818 5.7301 14.8966 5.89527 14.9574 6.08257C15.0182 6.26986 15.0223 6.47094 14.9693 6.66059C14.9163 6.85024 14.8085 7.02002 14.6593 7.14863H14.6562Z" fill="#FBB225" />
                                </svg>
                                <span className='professional-points'>4.9</span>
                                <p className='professional-session'>(2.3k recensioni)</p>
                            </div>
                            <div className='professional-details'>
                                <h4>Sara Russo</h4>
                                <p>La Dr.ssa Sara Russo è una veterinaria dedicata alla cura dei cavalli.</p>
                                <span>Prenota una visita</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Professionals