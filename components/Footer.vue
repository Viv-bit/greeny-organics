<template>
  <div class="main" id="footer">
      <div class="footer-main">
            <div class="footer-one">
                <img src="../assets/logo.png" alt="Logo Icon" class="header-image"/>

                <p class="footer-learn">Learn more about out products and <br>offerings</p>

                <input type="text" placeholder="Enter your email address">
            </div>

            <div class="footer-two">
                <a href="#" class="footer-link">About</a>
                <a href="#" class="footer-link">Contact Us</a>
            </div>


            <div class="footer-three">
                <a href="#" class="footer-social"> <img src="../assets/instagram.png" alt="Instagram Icon" class="footer-social-icon"> Instagram</a>
                <a href="#" class="footer-social"> <img src="../assets/facebook.png" alt="Facebook Icon" class="footer-social-icon"> Facebook</a>
                <a href="#" class="footer-social"> <img src="../assets/twitter.png" alt="Twitter Icon" class="footer-social-icon"> Twitter</a>
            </div>


        </div>

        <p class="copy-right"> &copy; 2021 Greeny Organics. All right reserved.</p>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    #footer {
        background-image: url("../assets/footerimage.png");
        background-repeat: no-repeat;
        background-position: right;
        background-color: #062815;
        color: #fff;
        padding-bottom: 30px;
    }

    .footer-main {
        display: flex;
        padding-bottom: 30px;
    }
    .footer-learn {
        padding-top: 10px;
    }
    input {
        width: 250px;
        height: 40px;
        background-color: rgba(0, 0, 0, 0.473);
        margin-top: 20px;
        padding-left: 10px;
    }
    .footer-one {
        padding-right: 80px;
        padding-top: 30px;
    }

    .footer-two {
        display: flex;
        flex-direction: column;
        padding: 0 50px;
        padding-top: 30px;
    }
    .footer-three {
        padding: 0 20px;
        padding-top: 30px;
    }
    .footer-social {
        display: flex;
        padding-bottom: 15px;
    }
    .footer-social-icon {
        margin-right: 10px;
        height: 20px;
        width: 20px;
    }
    .footer-link {
        padding-bottom: 15px;
    }
    .flower {
        height: 300px;
        width: 350px;
        position: absolute;
        padding-top: 0;
        right: 0;
    }
    @media only screen and (max-width: 668px) {
         #footer {
            padding: 0px;
            background-image: none;
            padding-bottom: 30px;
        }
        .footer-main {
            background-image: url("../assets/footermobile.png");
             background-repeat: no-repeat;
             background-size: contain;
            background-position: bottom;
            display: flex;
            flex-direction: column;
            padding-bottom: 100px;
            padding-left: 10px;
        }
        .footer-two {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            max-width: 300px;
        }
        .copy-right {
            padding-top: 30px;
            opacity: 0.6;
        }
    }
</style>