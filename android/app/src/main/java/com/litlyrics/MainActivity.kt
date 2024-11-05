package com.litlyrics

import android.os.Bundle // Import for onCreate method
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate

// Import for react-native-splash-screen
import org.devio.rn.splashscreen.SplashScreen // Use this import for >= 0.3.1
// For versions < 0.3.1, you would use:
// import com.cboy.rn.splashscreen.SplashScreen 

class MainActivity : ReactActivity() {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "Litlyrics"

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)

 override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(null)
  }

}
