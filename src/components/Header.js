<<<<<<< HEAD
const Header = () => {
    return (
        <div className="header h-32">
            <div className="logo">
                <h1>Logo</h1>
            </div>
            <div className="contents">
                <img className="search" src="data:image/png;base64,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"></img>

                <img className="home" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKMAAACUCAMAAADIzWmnAAAAY1BMVEUAAAD///9tbW34+Pjz8/NISEizs7ODg4P7+/uqqqrm5uZoaGi/v798fHzv7+/s7OzJyclPT09ycnITExPR0dGkpKRiYmJdXV2MjIzd3d1XV1cgICA+Pj6Xl5cNDQ0mJiYyMjLrlDo/AAAFKUlEQVR4nO2caXuqMBCFjbigiIrggtrq//+VV2stepKcLGztfXI+thReZ5jJZCZ1MGhGEyFr0tC9m1E+UyAKMcv7Bqt0WigRhVic+kZ76lpoEIUorn3DPUQQfwvkeUUQhVid+wYcDLKSIgpRZn0jjucGRCHm434RMyPhXb1acjOyYhxtekS0IryrN8ipNaIQ034QDw6IIj70QPi5dUG8afvZOaO6imCadY2oqyKYFp0SagsdA2SXZdBai1GmKVl51p0RnvRL9FfpTV7VsiNLnvWI32Gh2jg8Ibspg/Tr30/kkrw06oDwuNQ+fltd9aGHXB5bR9RXtG9Jmlhy1TLkLrax4l3EkvGuTcQ00j5YWkXYO5m2hzjUW3Emr8YEMh62hUgKHeVazGq3lsqgLXG0uqYhloy2yr+oi+hoxbs+9C8HxlgTImsHKbqYuxtvWZFCR+Poh0gKarhWO+kLHVPpOiXuXjdYYeSkoyMhJmDWA4EsGkO8OCCOi6iEte6gzweiuDSDyNoliJh9FUWw1rFteDONlitDBL8eH9eOYBlh7p5f6yPuHay4/6nboC+Rkp7LfF8XcagvF6UEl72QJO+/2pB3cgnXuiphiODo7NXi6O5pa5CsXYJWPAIFuHtHIOtUGKkLIhboEViSvZPCu6Bk4YiIe3kPEYElhwTSt2XFmk5SuCg/DuTJHbOkVxlEEdV5ETWCYKDudof8ZB0dtKLeQODuPUkTYuHY/MtJuSiHi948MViSpVsxcRovXlysqAiXSpgnKeTCocK4sLkQVqZ7lvhuAsiMvZOlNeSZDQAxXKgV73KyZGHZsqKjK3R0Yp7QxJCg6aeyq9UoIjoaF0C1IHBIW8sOMqOImBdNjn4I3c0qFTE3Tu727FloxcTKindBnhzTz2YoKOkAUIpoZo53ReDuHc1XdHLHCh3ZivaI8nNZeU/LIIqIM4E9qYpUAktyd2sh6QAQw8WYF1FYYPAbaGo1Ol1DRw+tw6USGOdM3a1qf2iOEX1LcrQHolRg0DSnOsBEp2trcDQNS70wcDRl57fQdbTQkayYOIZLJYBk/QUsg3LSF7shgtV3LknnXbjicHe/Pjh3sjnbOxkVYeDQ40Hz3O467L+55kUUBA5393O8mNMAKNDRfuFSCfMkP8W0+np8RtMIhsumphXvgsAho+abosy06haYdOq8iz+PBUvyd22ZDLbMMJgXa4VLJcyTFDK+bbzPE+2DMVz88yIKUpDe3aPJI2qOms10AW3/GnlRerSluydVb/28VgQOhgsZuroLN2Kq0UW0ft8lJtJKg44mo2svgSXlPf1aap3mu/eLcL5Dt8U+wsCBY73lTtlZSV+uaiMvorDYfnl8oS3ET4fnIoLhYrHVdxd2en8suTrQId30ixLzIm0c1oAEaz3GkivjWcnTx1wKF3JGoZ6kMwuFmH/YDDrH6fX9B604+iHMk9fUbzaXtmXFuzBP+sm+YeIlLDB8ZHm82l/1D2azQV9DimtCthgulXAj5iZ2GKJBxTVOj7eWFyV5W7L1cKnkGziN1osm+eVJn85YDfnkyUZ2gC4auZ+r6C5evuVxJrJjV8vVZGAMjIExMAbGwPhnGKPyMNXpUNrfpkVGw72buk+te5uKUzoU74YRO2ySTuy0UDeM5v86YEfXAmNgDIyBMTAGxsAYGANjYAyMgTEwBsbAGBgDY2AMjIExMP7XjJZnFRpj9DirkCxHNorM35g4i6zu5PENEKexna7GO10t7/Rrvts5KOiv6x9nklsRBVt5MAAAAABJRU5ErkJggg=="></img>

            </div>
        </div>

    );
=======
import SearchBar from "./Searchbar";
import logo from "../assets/logo.png";
import { ProfileMenu } from "./Profile";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 -mt-[284px]">
      <div>
        <img src={logo} className="logo w-[180px] h-[48px] mt-1 ml-2" alt="Logo" />
      </div>
      <div className="flex items-center">
        <div className="w-full max-w-sm -mr-5">
          <SearchBar />
        </div>

        <div className="home opacity-70 ml-4">
          <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#ffffff">
            <path d="M226.67-186.67h140v-246.66h226.66v246.66h140v-380L480-756.67l-253.33 190v380ZM160-120v-480l320-240 320 240v480H526.67v-246.67h-93.34V-120H160Zm320-352Z"/>
          </svg>
        </div>
        <div className="-m-2 mx-2">
           <ProfileMenu/>
       </div>
      </div>
    </div>
  );
>>>>>>> e6390cbea91a3af67669dd7e1ff3f162feca8b8b
}

export default Header;