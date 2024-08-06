import Navbar from "./_components/nav";
import Header from "./_components/header";
import Plans from "./_components/plans";
import Clickme from "./_components/click";
import Footer from "./_components/footer";
import Testimonials from "./_components/testimonials";

export default function Homepage() {
    return (
        <>
          <Navbar />
          <Header />
          <Plans />
          <Clickme />
          <Testimonials />
          <Footer />
        </>
    );
}