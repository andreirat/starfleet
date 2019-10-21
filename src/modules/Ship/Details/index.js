import React, {Component} from 'react';
import {
  EuiButton,
  EuiCheckboxGroup,
  EuiFieldText,
  EuiForm,
  EuiFormRow,
  EuiIcon,
  EuiFilePicker,
  EuiLink,
  EuiAvatar,
  EuiTitle,
  EuiRange,
  EuiSelect,
  EuiSpacer,
  EuiSwitch,
  EuiText,
  EuiFlexItem,
  EuiFlexGroup,
  EuiFlexGrid,
  EuiImage
} from '@elastic/eui';

import {images} from "../../../helpers/images";


export default class ShipDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  
  render() {
    return (
      <div className="main-overview ship-details">
        <div className="main-wrapper">
          {/*DETAILS*/}
          <div className="header-section">
            <EuiFlexGroup>
              <img className="image"
                   alt="Accessible image alt goes here"
                   src="https://thumbs-prod.si-cdn.com/zonBWw2E-iVJ8sHIiY5UXUe-DDc=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/c7/b9/c7b9e461-84fb-47b7-8d59-48442e20bb8a/34i_dj2019_spacexdragonart_live.jpg"
              />
              <EuiFlexItem>
                <EuiText grow={false}>
                  <h1>Dragon 237X</h1>
                </EuiText>
                <EuiSpacer/>
                <div className="icon-text">
                  <EuiIcon type="flag"/>
                  <p>Solar System</p>
                </div>
                <div className="icon-text">
                  <EuiIcon type="tag"/>
                  <p>spaceship</p>
                </div>
                <EuiSpacer/>
                <p>
                  Starship is a 9-meter-diameter (30 ft), 50-meter-tall (164 ft),
                  fully reusable spacecraft design with a dry mass of 120,000 kg
                  (264,555 lb), powered by six methane/oxygen-propellant Raptor
                  engines. Total Starship thrust is approximately 12,000 kN
                  (2,600,000 lbf).
                </p>
              </EuiFlexItem>
            </EuiFlexGroup>
          </div>
          {/*FLIGHT PATH*/}
          <div className="flight-path">
            <EuiFlexGroup>
              <EuiFlexItem>
                <img src={images.flightPath} alt=""/>
              </EuiFlexItem>
            </EuiFlexGroup>
          </div>
          {/*CREW*/}
          <div className="crew">
            <div className="section-title">
              <EuiTitle>
                <h2>Crew</h2>
              </EuiTitle>
            </div>
            <div className="crew-member-wrapper">
              <div className="crew-member">
                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIALoAugMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAFBgIDBAEHAAj/xABAEAACAQMDAgMGAwYFAgYDAAABAgMABBEFEiExQRMiUQYUMmFxgSORsRVCUqHB8CQzNHLRYuFDRFOCkvEHFiX/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMABAX/xAAiEQACAgICAwADAQAAAAAAAAAAAQIRAyESMRNBUSIyYQT/2gAMAwEAAhEDEQA/ACae0lgeqyA/MVeuvWONx3j5kUr20MqhN8aFsnaTxzVl3DcPlDAFQjnvXk8nZ6HhgMv/AOxaaODKQfpU19oNNI5lI+1KJhMkSRtbqG7EDmoyWxibxCjBz0LYo8rB4Yjt+2tNUcz4wO9WJrGnFdwnBz6UhJbPIzKys6MOorQbVY0EaAAt6Dmg2HwodotYsJM/jYPzFXLqVkxwLhPvSHtkXGCQemSKtZYxmWNpCehycc1rZngQ/C4tiMidMfWrQUwDvXB+dIMCyBfxJACemavEswjB8VjtODitzEeAedyZxvXP1qwbfUUkJd+Am6WUMwPXNUnWp5ZNttG59W/dH3p1KXwXwD6Cp4DD867xXm15qUiHD3LMT1CN0qiPWLyP/KuJWXupbNHZlgf09QIyK+C4pGsdVluyiG48Jm6NklT8qJyl0jBN+pbvgmpSnQfANKlf4h+ddDJ/Ev50oiORsMs4f/310rKOZAwUdw1Dyh8A1tNCrYMiA+ma6Gj/AI1/Ok9mgSQbn8x6Zq1ZM8hjR8xvANbSxAEmRQB86znULT/1hx6d6XXuoIoyZnIHyGasjaxaPf4oVcZ6UHlZvCg1Jq1qvC5Y1QdZXPEJ/OhKvbHO2QH0zUt8XrU3kYywxEjdKsga6LFdx2gnBq1rglyU34GN3mqx4vfoUZ0YMnQEUVTTWWyAAgyFyFPX61ZtFXoF21x+Mx8w83l3Gr7iP3oKJlby+p4qayGLcbqBHVcKCo7+tQ1CQT2MgMwTDdV7Ch7CcWIRwbIHKKg6rVcUDeIJZp3YDj7URtVUWkL+IphMQ4zycD9a5LM9vbeRVweF39aXk7oZFO6EyJtyQR5BUxM6o4EKsVOTx2qqzd5bzw5I08SJeD2+1E7beWbxURg3G2gwMraWIR+NNb7Y/Uj9KE3s7I2XV1ycrAh5P1orqcxQLJOBtQYRfnQW0Dz3DStlgO3996tjjXZNuzRCm2AXV+6Rp6DsOwrDcajLNlLdMQ9mHA/71fdspkDTuuFHlTGVT/k0Mmkurtilqpii7yuQCfp8qolZvRdDZGUnfKmfQdaH6i8unXC5AaPPI3Ci9rZ2trD4l7IWjPQlioP/ADQ7V4YLslrJMp6bCK0XbC06N9hMjq0kZ/DcZA9GpmtGtZY1kcbmxjg15xE15aIY2yIx0FG9OvjgdR6jNDJjTRk37Hf3W0f951bt6Vw20aRnw52c5xih0dw8tsHRCzj+GrtHub+a4ZLi3DRfuk9Qa5XGhmXR2wluFdxgrwGerrhFLfhOrY67TVGsJNE0YNvIzclfQmvrONo7bx7iIhyACi0rWjEzakuwYMQBk/OoC3QzkLIoXbkrRK2aESsXDIpH3rnu0HmkEe52Pp1FCwcgdsjjG4+b0r7aDyV5Pzoja2cbRHxYgCScConT4sn8KsHkgJJDBcRGMO8fOQynmsx0doTv9/mYfwmsumXEUZkkupC8SsREp6mt0NzFKp8NtwznzGq8WmK3fRG+JW32kERgdaxaUYURlnaOSGZuN3Y/OqdavXaTw8naBwKDsS2Mjj5dqvDE3ESWRRHgpax24SNY0x8JxwDVErRSMRcxLgD7H50B0a9nF6m+EXEaJgq3AFGb3UbSR0eCAK46jqKhLG4uikZckb7LY3nW1CxgYUmtRtIpnWUA8Hzc9KGwahJMwR1BIGcYx+VHFTwbFpGzvbHlPqaMINuxZsXtXEl7d+FEOQQo+RPf7Coz+HbWYhth5U4Z/Uit86GKEIoVTJ1bv86W9avVSRoIM+DAvmJ/fNXAgZcTSzXQVX5ZvLk8ADq3zwKJ6PaLclZmy0Efmy5yXPqf+KE6TazXBmucgu/4aE9Bk5Y/lxTtZ20dnpR2jp0B7471putDQVszLYx3c2+4TLDoOy/Si0GlWiYPgKSOnFU2vLKwHyo1Cg8p7UIoq9AXUNFt7uIqY1Vs9cUlXNk1lqDQFSpH8xXrRjQqeKT/AGpslW6troY252MaLtIyplmkEQxI3Q44z3oiYFjcXKApuORz3rP7uIbLbk5zwR3orp1l4ti0V1Ix85wPpUMhNujFfq93EhluHUqeMGoiCQAKkz5Jz8PWtl0lrZxmJYyzNyoLZOaCreXu7yxLtVyjc96lTZk76Ct1qMGnxiS5ZQenStMN9HLAk0WxkbkHpigWq2EnNzdJ4qheEzxmhdu0unSqgDvDIdvht05plFUBjc2q2SZVpFBHJ+VUH2i0/PxL+VfNp0qWUaraxbsgnJ6j1qsxW4JBjjBH0pdIFIRp5H1F1gtB4cSrnzVU5eBtpDqUHLU2WFktrCyyQxeFj42PIrPLo5uzJtmRom7jmuhZULQozSs75Yls9zRWx03xIFkclXbpnoBWkaRHbuD4bmTO1crx9a3TvqSEpbWgkwMbjgCqSyp6iKoNbZfawWMMD2yygyNy7njNZ2hsY8/io75+FTU9M0y+dCb6NG3ckcflRC1s9IRSzxwtkgYQZOfSobuuxlpH2i2hkYu+0ZIAHyoxdbSXyNqqpI579KqtFiwZLdOAMg9BknH6CsmuXyWME27BJHU/PoKsuhVsB6rqKRyyKDnYFBx+7k4ApSup/eCSjKFYnAHcZ5/Woi6llW4knzvdw2PTHaoWUe8IVO4sABVUqQdtjVpMASzgjVQC2APvyf6UT1CYb1gjPw4GPlWeyKwAPIR4dvCFznq5HJ/lWCWTRNTl2y6lILt/hjj3Mf5CpVyZZNR7GawiDp3HGDmixxHbnnkUo2kx0u1N6t4t1YAYZw2Sh+Ypi0W6Op2HvCfCQePrTpUFuwnESyDHNDNbtRdWU0QB3jzL9qxalfRWcBe8vRbwjgsTjn5V9YNZXQzY6v4smNyx7uo9cGs1aFTplUsplt7d0JxKin6EURsLuaKMBgfiJ56nNBbXdgwEjfDcvEcdPipqlmghjRuN2MEbc4Nc2RM0mgf7zHP4s7Bkm+Bd69BWHRIZNLM093IJlkOV29B9q2Tapa2Y8S4Ekrk+VCtcsvaO1u7z3eGzEY25LNzg1OpUCwiWkukWRfDIxnFZA6yOIZPC8Q9hVWqrdyENpzjbjDDOMmuw6G8iBp/K5HOOKQZUls5LcFGKNPkrx14ArG15Y7junjJzya2DSbVI3953EL1Kk5NDzcaGpwLGQ47+HRqw2vRBlEkfhi4UuvJDDqPpVMkfuojkSQKQeVxw32qUlq1xKGh/AYNwxOSaICzRtvvcokwOcDnNEhySLreL3qIu+dq9yMVy9u7bT4woUFm+Fc8mqdRuzDaGKHKRBex5pZGsQ2dxI9yjzzYxhz0+lPDG30ZNsK3uv+Mot7O3ZWzhifWsNhp2olGUIYQQQCOpyetXaVdBpVnUpGHyTERk0wS6mAvlKAcY45p1Jw0kGX8NllaNBbqu47R+gFIXtVeG8vXhUnw0fkjvjoPzr0DVJxaaCJSPO64TnrmvO0tXZzMy8uxwM9c5ya6DRWhf1CXYghHVhhj6US0W3H4JJU4XIHfPahmpRclieRyTTFa/4OFZZFwFjUD5kjijJ6GgtmrV0laAWduevLkep7Vb7NaEttewX6gLPDnaSvT51g0fUGkvN0h82elOUTboifUUqtFnBNCT7YxQJdmG3kO6Y+JcDOFLduOlNHsLOBpfhKclTSP7QTeNqsgi8+0+Y0zew8j+dEQ8elP6FrdBD2h9nINauAzs6qRgDPH2+dapNAER08lwRZZ8JwpDc8tuOe9F4sOnJy3XbVkZLoQ55HY0G9ULx3YtrB4OrXquSBJcCT/5DtVmse+IPebXJJUZUfxdKlfSK+rGJThyq4z6nOP0olZzK2wvxjIdfn/eDUnpCzFH9la5e5neJj5edx6VOwtr+2l2bok3HB3Cnqa48PxFGHQjjZ1HrQ6/sjdRI9oisQPMj+Xd96i8jaoEb9kI4ZFjG/axAGNrVolnuFjyqylvQHNc0/TI4AJ5EfxdvKBiRW95BEviSEovcN1FRoMpKzBE8Zw7C43PwQVrSLGP/wBE/lWsXkXhh3IRe2T1oXLqkolcC6iADHFNQLb6MOmLKqSe9DJLZTjgCvrqVLQEyMSW4UAVTaXpmhZ3ikT5HqT8qzy6rbRtvlnKFBzGwB4rJsR402Yr+5EySB3kULghNp81Al0e/vblnaB1U8kkUzLr1lKpfbgdty9auTU3ZAB4aE9xzVIzlDoo4KiqxsUtCBcE4HGcdK3wWSSTAMVIJ6+lVvPC77Z0LsOuOhP0qVs27UUXw9qnnbu6ChG5S2Z6QQ9qiuYrVf8ALjTP0xwP60sWaK6tJMcRhTk9sf2KYNVX3iV2OMMOSD1/vNAZI82LqgPUkr2OO1dDds0VoAarbibxpUUBeoFU6jdeNb2Ua9BCp4GMnGOaJ3biPSZpTjhSoPbPXP8AfpSxZ3QulER6xDAB9Koth6Zt0hv8aoNP8Mim2IDche1IUQSNt65DgZBpkniuNM9n5L2Rg7yABFzjJNZlYy0Ld5oVxLK8ltOV3uScHvTb7H6bqWlr4sssASQ9QSW6Upadq11kJ4I3EnGWxmnDT9UvRBFDJZlkT94HPNM7NGN7QxiPzHEhLA5Unt8quWQ9Gxn9aEQ3tzdllS22n1LUUhRkQGb90En7UjYGqFPVJm/bFzKn/huiKf8Abgn9TRq4XwbgS5xHNyMdjiljU5uk3Z5s49ck5o2tx71ZKufMnT5kDp+VIxJDXptujWglQBi2M1ASzxTlTDmLJ8xPSlNtYvrWz22szKS2FAGaP6PHqMlpHJqUzmRhkR4xmueUfhJ67NrXsePDZ0RuoB9K6sySuMNCQnxbjSp7QmaXV4IbWAyNEfxNvT6ZpgFtMLAfgjceqp2pWqDSox67eaTjdMDM/wC7s4C1hW3gZQwyQRnpXTp1sLtPeIZGkLeUMfLRwQkABVjAHSg2mUWuhFkuy1uHiUzqeoBwQKER3yPeFjbMyN5SD0AoxpmmtbKIzIxyOgGa1SWtvahEeEFGOTzzVuUVoVQvZSY4YYkyhEh5UBM4zWw6fIYw8bYGMknjFUW91JK7ZRlXPkDDBxVSXcQvfAu7h1RhkEZ6+lJtlGE1RITLcyztKeIlAHQt/wDVStxGl01yG2hlIAbrjua1xPbe6wIqLyzyg4zyBgfrQ2aTYyIzbw7ZKqM/zp4knsLvHiIucgsAVGM4AFCJlKadIevmGR8s0WXUEnAk6DYQADgAYobdMP2de7hjcA0efXvVQoW/apGTQ4Y7cHZIcyHHbrSXbM0MwkQcg/ypy0nUTqct1ZXeCGBMZ9MdqXr+we0u5I9vCmqR0qM1bs0JKH2yIfL1/wC1MuuaitxpFrHEwKooyDSYC8ZyoOPSr1ldxgHj0pqsaw/oumrKyyKQV7g06WFi0S7I9wXrgN0pD0PUBBJsfyjPevQLPUIdiNuBGOTmlfZRdaNsNuISVUAZ6/OhPtFqPgRraRnzyY3n+Ff+9aL/AFBgv+G8zEcN2FANdtHS3WclmLNktnrSXbFelbMxi98khgQ/5fJ/Stmmqf8AEoSRhsqR60N9nrtGuklkYbWOCR69qN3ANvN5TjccZH9/OlkZ9BSzhj92Dqi5Z8ZPY+taLzVrlFEcMe71c9BisEUkohCSKojLYTB7HvWW+fUYV8C1BkZm+I9AKg+xXEL2uskLsYIkoGWOOtZJNb1Wa4kiskDIvG4rgUOsbW7iu2mvtskpAGxTkKKJSX0SyxxLlOfhVetK3TAoJ7KLy5vZIQHmAZRywXvQb9p3qeT3k+XimlWDghlH3FZzZW5JJjXJ+VZTCDX9oLC1iOyF94HYVks9di1MmIxrkHjJwaGas6pbBIFzuGMY5qGk6ZJlXxsLdQfSqrHDhbFt2GZpIJmK7XxkAN/XNSm0iItiDbK6jrIck/Or0ktbSzHiBEdc5Gc0K1XWI4LZZ4Uw0nljx1f1xQjCbeija9mu6dreBLVtoKpt4Oe+TWZb/wAcOka/hIMErz9B+tKztPd3B953herKJMN1+nFNmmm3soEhKgSH4UT0/vvVnHiIiFzqAhube1EgZshZCOnrgVPU7km2DHygRnatfS28L3ReO2YSgc5fnP5VaLA3aFGlRWPxBTuYj69qyGoVNJidtbQRjI8QHI9D1pi1+zSQNKF4Y4B7mrIrKPTTJIgAwcdMZ/5rBq2oyP7uoHfAbr0PT+Qp+2KtEbTR0uBtYEN6Yof+zBDfPBMpXB4o17K6zFOdkqLlT0PVaZNU0SK7uYbu3cKeC2RkGtZT8QHY+y9jcgbpimR1FF9M9nYdOkkknla4VQSit/WiFnY+BkRMMk5yT/StNyQsBAbcfX1rNirsF6lGttZROP8AMLdB0x3obqWpW88aW+8q+MYY8H6Gt3tJHL+zPGXfuUrjaN3fmka7uhKoYlSCPXtSpGl9LLEe5XZR1IjY/b601Rk3FsI2BLx/D/1D5etJ8EkjLsQ+ImOEJ7UwezV4l0RayMUlBwuRgg0JIPaC+iRreeKJHJMDAbDxxRgq2GOwbCPKQeSaVPaiwuIUF1au9vcRkndG2N39+lYNP9udStwIb+GO7QDG74H/ADHB/KpvDKW0I5UOUcaRdMbm5OetT2Z52/yoXae1GhzvErSSQs2F/ETgE/OmlYI8DkEEZyOag8covYOYPjj+VWe7SHkE/lW8RovQc12hxF5iDeT24uN8V2JChywC+VfvS7d+09yZZYrZljiJ42jlvvS7Pf3E8eHkITHwjgVSGJHJr14YYRA8jfRvuL+4ml3tI351kuJHEane+EGQM9PpU4xnrXZYfFidAeao0KF9KRpba1IAaWZl4+3GaK+II0dkYbiwDykcnjn7UsWWp+7m2tpAU8NsbuxFbJLtZLlwHxEwyB98H+lcsouy0ZKgpJe3NtCZYZH27gFb1orYa9cTgPE+GI2suB19RmgiSrLayQMQeFkU/T/tWOe5ks4NkJU7up77e9Io2NJpbDk1y8rbfGZ5N+3P61H3YyiOMg5VWI9c5yf1pXsNSkld5S+xVY47YHGBimCw1Fri/wBk6iMou58L6kcfI9KZxaEjNFaWHumo+LbjCs5DAfOvRdFd/dgjcjsTSS17BayePexywRbzvZ0z5u4wOR96PWPth7OwpzfN9DE3/FBRk9opKUUg/KrxtuTvUkj3hWbr1+tBZfbb2cx/q3cY6LGf+KGze3+lI+YY7mRQOAE2/rR4S+CeSP0ZNZRjFEU84VvNEDguO2D2Oe9eae00RtdQkE0aR+M24Lnn8qt1j2xm1K7ge3tRCqkKNzktknAPHccUJ9tLqK7ezjV5Gnt43jkDfuENwM9+Bn700cbToWeWPHRDTriW3nDIwIBximu1v7NpQl/buitwJY+fucc/lSTpDJKF8e5jjZTjkHmmRZFWFZAS8Sj4guM/MelLkjTDilaHRppRZKhIvLZh+HPnO8ehPYj170i6haL47xJlZA2UVuN4/wCaNezl6UeS1Zm8KQ5XnG0jqPvQj2hDJqskXJMJOxz1IoY0+Qz6BqEqSp4PQj+lehewOtb0/ZVy5JHNuzHt3X/ivPRIZH8xyR3rTBJJEwkjYq6eZSvXIq+SHONE6s9mSVHkZA4JX4sHpUsD+I0raBYzyWpuUJPvHmDhsjFMaxuFAJ5xXmSVOgcT89cuQM8VcAFJGKjbLtjDd6l0BJ617RNF0LecCuQTZvmj/wCmuWZyxrFZyf8A9dj6nFAN0EL5RvAIHWqdhGrJEr4Xw92PmRzV94M3MQ/6qqtj4mt3J7INooNBfZdBcyW0UkYVXKeUZPQVTemW4iUK21weN3FfMwTUpEYDD9c1oxtJZuFyT9hQ4qzN6ZlWdbSSYCESTEjDMeEOPTvVtlqU1pKHAWYb1d1kyN5Byee2f5UOUlmLHqeTV69Kbijn5Oxj1TWI9VtJ1hEkt1K5d1dfhDN+7/F1A7dRS68bxPskR0Zf3WGKZPZhIZ2jtbNT76wle5l5Ro4wDgK3fnaePTmtPtjp1xcWuna0q3U6XwCeLLceNkjoBgcDrU41F0hpXJWKVdHJq+KxupLxbNYitw52qr8c/WvmsrlI4ZDayskxO0IOWwcNj5j19aryQlMN+zaWUkMiz7iwYLNEAC23I2yRnsVPJHfFR9sUtp7n3v3ib3qTAMElmYhgDBOeh6fOieq2Frb+z1wSHi2xquQyq0sgOVDAHnAbk9aU76+u76RZL26muZFUKGlcsQB2FTguTsebpUUae8Nneia6iMsfoDjHzpg1W+huFe2tFK7Vzj5UvFd6Mp6EYrRo8u+XZIfxI/IfmvatKCbsfFOtBDTL8hDuyxjIORxzW6/u/f5/FJ8xG0/agsQ8K7eM8BuDRCAYQ54wa3FLZdNvRkg4uWX61rBxj6VlRcXf3rVJxGKLMh6//H2qNLDNpcj48P8AEi+Y7j+tNTXShiMdDXlvslOYvaKwKtjMmD9MGvTWjtCxPhtyfWvPzxqYrPB05TFRlO2MA96shGTg1munw4X0r0ibejTYkYY/Khdg3+PVm/iNErbyRMflQi2bZdK3/VWFfoY5RuvIc9jWPTf9deSHg7yP5mt0ZDTo/oOlafZKLTPd5b28u2Sb3ogxBQxbjKjaRzz8xWGk6aBF/wCW8R/XrWm6l22UuMEnCj71drq2sl3ILViycHkgkHvnHGfpjrQ+8bFtAo6liT+Vb2ZvTZmHWrkqkVYp+VOcxqt7y4s/ENrK0RmQxyFeCVPbPb7Vv9nL1ba9iW7uJY7QKwHJZYWPRwv1/WhLHIBroOBSuKYU2nYzahr0BudLnt9st1bN5pMFVRuBuGOpwTweOKOXkw0zT5/2fqVs91b2+628YqwuInOXZRgYfPODntivPAevXr8q+Jxn+8Unj0hubPtxKqCSQCTySefWomuCu1ShSQP51Bn93u4rhRgbgH+lSFfSKJEKN3HHyrUZOnYU1BMTiRRgYzWu288RP8QzVmg6jax6deHUbH3x5IFghB/8FwTk/LORz8qzadlYSrfu96Q7Y/SsjF19TVl44QKp64rknFzH6E1mvH3zNj1rBZt0W4EGqWspOAsqnPyr1sSqRxXi0XxL617RaGIWsOeT4a5OOvFcf+mO0IeJRjnd3oTdPvusD1oxH8P2oGf9Y31rtJzCyDEJ+lAjxLn50d/8v9qBP8Z+tEWYxaXKJcZ7L/SseiTNsliz+Gr71X59M1ZoXRvof0rJo/xTf7KA3w1wkLGcngscZNQvsZhTIyqc/U19LxaW2O7H9DUb/wD1j/Rf0FFdgyfqVKe1WL/fyqpasT93/dTECw9PpXwzXF6H/ca63ANYx8OtfGvh1/KuDnbWMcrua+/eb7VFfhP1rGJZqYOCKh6VIfvfWsYus5fBudrf5c3lb5HsaMRJsBz6Ypfl/wBOx74BzTEPgQ/KkkdWB2jPOMmNvQ0PY/iN9TRB/gH+6hh+Jv8AdQKSL4zgng807WXtG8dlbxmTlY1H5CkiL4q00sop9io//9k=" alt=""/>
                <EuiTitle size="s">
                  <h4>Ellen Stofan</h4>
                </EuiTitle>
                <p>Captain Biologyst</p>
              </div>
              <div className="crew-member">
                <img src="http://www.iafastro.org/wp-content/uploads/2014/04/StoneEd72_73ffca.jpg" alt=""/>
                <EuiTitle size="s">
                  <h1>Edward C. Stone</h1>
                </EuiTitle>
                <p>Space Specialist</p>
              </div>
              <div className="crew-member">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Michael_D._Griffin_official_portrait.jpg/220px-Michael_D._Griffin_official_portrait.jpg" alt=""/>
                <EuiTitle size="s">
                  <h1>Michael D. Griffin</h1>
                </EuiTitle>
                <p>Aerospace Engineer</p>
              </div>
              <div className="crew-member">
                <img src="https://planetary.s3.amazonaws.com/assets/images/people/20130829_bruce-murray-2002_t233.jpg" alt=""/>
                <EuiTitle size="s">
                  <p>Bruce Murray</p>
                </EuiTitle>
                <p>Captain Biologyst</p>
              </div>
            </div>
          </div>
          {/*ISSUES*/}
          <div className="issues">
            <div className="section-title">
              <EuiTitle>
                <h2 style={{color: "white"}}>Issues</h2>
              </EuiTitle>
            </div>
            <div className="issues-wrapper">
              <div className="issue">
                <img className="image"
                     alt="Accessible image alt goes here"
                     src="https://thumbs-prod.si-cdn.com/zonBWw2E-iVJ8sHIiY5UXUe-DDc=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/c7/b9/c7b9e461-84fb-47b7-8d59-48442e20bb8a/34i_dj2019_spacexdragonart_live.jpg"
                />
                <div className="issue-details">
                  <p>Status <strong className="open">OPEN</strong></p>
                  <div className="icon-text">
                    <EuiIcon type="calendar"/>
                    <p>10.09.2019, 11:45 PM</p>
                  </div>
                  <div className="icon-text">
                    <EuiIcon type="flag"/>
                    <p>RIGHT ENGINE</p>
                  </div>
                  <p className="details">
                    Starship is a 9-meter-diameter (30 ft), 50-meter-tall (164 ft),
                    fully reusable spacecraft design with a dry mass of 120,000 kg
                    (264,555 lb), powered by six methane/oxygen-propellant Raptor
                    engines. Total Starship thrust is approximately 12,000 kN
                    (2,600,000 lbf).
                  </p>
                </div>
              </div>
              <div className="issue">
                <img className="image"
                     alt="Accessible image alt goes here"
                     src="https://thumbs-prod.si-cdn.com/zonBWw2E-iVJ8sHIiY5UXUe-DDc=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/c7/b9/c7b9e461-84fb-47b7-8d59-48442e20bb8a/34i_dj2019_spacexdragonart_live.jpg"
                />
                <div className="issue-details">
                  <p>Status <strong className="pending">PENDING</strong></p>
                  <div className="icon-text">
                    <EuiIcon type="calendar"/>
                    <p>14.11.2019, 10:45 PM</p>
                  </div>
                  <div className="icon-text">
                    <EuiIcon type="flag"/>
                    <p>COCKPIT</p>
                  </div>
                  <p className="details">
                    Starship is a 9-meter-diameter (30 ft), 50-meter-tall (164 ft),
                    fully reusable spacecraft design with a dry mass of 120,000 kg
                    (264,555 lb), powered by six methane/oxygen-propellant Raptor
                    engines. Total Starship thrust is approximately 12,000 kN
                    (2,600,000 lbf).
                  </p>
                </div>
              </div>
              <div className="issue">
                <img className="image"
                     alt="Accessible image alt goes here"
                     src="https://thumbs-prod.si-cdn.com/zonBWw2E-iVJ8sHIiY5UXUe-DDc=/800x600/filters:no_upscale()/https://public-media.si-cdn.com/filer/c7/b9/c7b9e461-84fb-47b7-8d59-48442e20bb8a/34i_dj2019_spacexdragonart_live.jpg"
                />
                <div className="issue-details">
                  <p>Status <strong className="closed">CLOSED</strong></p>
                  <div className="icon-text">
                    <EuiIcon type="calendar"/>
                    <p>19.10.2019, 10:45 PM</p>
                  </div>
                  <div className="icon-text">
                    <EuiIcon type="flag"/>
                    <p>LEFT WING</p>
                  </div>
                  <p className="details">
                    Starship is a 9-meter-diameter (30 ft), 50-meter-tall (164 ft),
                    fully reusable spacecraft design with a dry mass of 120,000 kg
                    (264,555 lb), powered by six methane/oxygen-propellant Raptor
                    engines. Total Starship thrust is approximately 12,000 kN
                    (2,600,000 lbf).
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="destinations">
            <div className="section-title">
              <EuiTitle>
                <h2>Issues</h2>
              </EuiTitle>
            </div>
            <EuiFlexGroup>
              <EuiFlexItem>
                <div className="image-wrapper">
                  <img src={images.destinations} alt=""/>
                </div>
              </EuiFlexItem>
            </EuiFlexGroup>
          </div>
        </div>
      </div>
    );
  }
}