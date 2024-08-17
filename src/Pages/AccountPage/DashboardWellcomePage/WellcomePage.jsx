
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const WellcomePage = () => {
    return (
        <div>
            <h1 className="text-2xl font-medium text-center">Hello name , Wellcome to Dashboard!</h1>
            <p className="text-lg font-medium lg:w-[700px] mx-auto">From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and manage your product.!</p>

            <div>
                <div className="w-full mt-5 h-full">
                    <Player
                        autoplay
                        loop
                        src="https://lottie.host/ee18e6d9-6d58-440a-8a38-11c9162a36d3/iJ1aQN1BEt.json"
                        // style={{ height: '300px', width: '300px' }}
                    >
                        <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                    </Player>
                </div>
            </div>
        </div>
    );
};

export default WellcomePage;