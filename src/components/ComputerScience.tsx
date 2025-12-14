import { Link } from 'react-router-dom';
import { ArrowLeft, Cpu, Smartphone, Radio, Code } from 'lucide-react';

export function ComputerScience() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/integration"
          className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-8"
        >
          <ArrowLeft size={20} />
          <span>Back to Scientific Foundations</span>
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-green-500 to-teal-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <Cpu className="text-white" size={40} />
          </div>
          <h1 className="mb-4">Computer Science & Engineering</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-teal-500 mx-auto mb-6"></div>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            The technical architecture powering NutriScan Pro: embedded systems, wireless communication, and mobile application development.
          </p>
        </div>

        {/* System Architecture */}
        <div className="mb-12 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-green-500 to-teal-500 p-6">
            <div className="flex items-center space-x-3 text-white">
              <Cpu size={32} />
              <h2>System Architecture Overview</h2>
            </div>
          </div>
          <div className="p-8">
            <p className="text-gray-700 mb-6 leading-relaxed">
              NutriScan Pro follows a three-tier IoT architecture: sensor layer, processing layer, and application layer. This modular design ensures scalability, maintainability, and efficient data flow.
            </p>
            
            <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-lg mb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-green-600 rounded-lg p-4 mb-3">
                    <p className="text-white">Layer 1</p>
                  </div>
                  <h4 className="text-green-900 mb-2">Sensor Layer</h4>
                  <p className="text-gray-700 text-sm">NPK and pH electrodes collect analog soil data</p>
                </div>
                <div className="text-center">
                  <div className="bg-teal-600 rounded-lg p-4 mb-3">
                    <p className="text-white">Layer 2</p>
                  </div>
                  <h4 className="text-teal-900 mb-2">Processing Layer</h4>
                  <p className="text-gray-700 text-sm">ESP32 microcontroller processes and transmits data</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-700 rounded-lg p-4 mb-3">
                    <p className="text-white">Layer 3</p>
                  </div>
                  <h4 className="text-green-900 mb-2">Application Layer</h4>
                  <p className="text-gray-700 text-sm">Mobile app displays insights and recommendations</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-gray-900 mb-4">Component Interaction Diagram</h3>
              <div className="bg-gray-100 p-8 rounded-lg">
                <div className="flex flex-col space-y-4">
                  <div className="bg-white p-4 rounded shadow text-center">
                    <p className="text-gray-900">NPK & pH Sensors</p>
                    <p className="text-gray-600 text-sm">Analog voltage output (0-3.3V)</p>
                  </div>
                  <div className="flex justify-center">
                    <div className="border-l-2 border-dashed border-green-500 h-8"></div>
                  </div>
                  <div className="bg-white p-4 rounded shadow text-center">
                    <p className="text-gray-900">ESP32 Microcontroller</p>
                    <p className="text-gray-600 text-sm">ADC → Calibration → Data Processing</p>
                  </div>
                  <div className="flex justify-center">
                    <div className="border-l-2 border-dashed border-teal-500 h-8"></div>
                  </div>
                  <div className="bg-white p-4 rounded shadow text-center">
                    <p className="text-gray-900">Bluetooth/Wi-Fi Module</p>
                    <p className="text-gray-600 text-sm">Wireless data transmission</p>
                  </div>
                  <div className="flex justify-center">
                    <div className="border-l-2 border-dashed border-green-500 h-8"></div>
                  </div>
                  <div className="bg-white p-4 rounded shadow text-center">
                    <p className="text-gray-900">Mobile Application</p>
                    <p className="text-gray-600 text-sm">Data visualization & recommendations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ESP32 Microcontroller */}
        <div className="mb-12 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-green-500 to-teal-500 p-6">
            <div className="flex items-center space-x-3 text-white">
              <Cpu size={32} />
              <h2>ESP32 Microcontroller Programming</h2>
            </div>
          </div>
          <div className="p-8">
            <p className="text-gray-700 mb-6 leading-relaxed">
              The ESP32 is the brain of NutriScan Pro. This dual-core microcontroller handles sensor reading, data processing, and wireless communication.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-gray-900 mb-4">Why ESP32?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                    <h4 className="text-green-900 mb-2">Built-in Connectivity</h4>
                    <p className="text-gray-700 text-sm">Integrated Bluetooth & Wi-Fi eliminates need for external modules, reducing cost and complexity.</p>
                  </div>
                  <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-600">
                    <h4 className="text-teal-900 mb-2">12-bit ADC</h4>
                    <p className="text-gray-700 text-sm">4096 resolution levels provide sufficient precision for voltage-to-concentration conversion.</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600">
                    <h4 className="text-green-900 mb-2">Low Power Modes</h4>
                    <p className="text-gray-700 text-sm">Deep sleep and light sleep modes extend battery life for field deployment.</p>
                  </div>
                  <div className="bg-teal-50 p-4 rounded-lg border-l-4 border-teal-600">
                    <h4 className="text-teal-900 mb-2">Dual Core</h4>
                    <p className="text-gray-700 text-sm">One core handles sensor sampling while other manages wireless communication.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-gray-900 mb-4">Firmware Architecture</h3>
                <p className="text-gray-700 mb-4">
                  Our firmware is written in C++ using the Arduino framework, structured into modular components:
                </p>
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded border border-green-200">
                      <h4 className="text-green-900 mb-2">SensorModule.cpp</h4>
                      <p className="text-gray-700 text-sm mb-3">Handles ADC reading, averaging, and temperature compensation.</p>
                      <pre className="text-xs text-gray-800 bg-gray-50 p-3 rounded overflow-x-auto">
{`float SensorModule::readNPK(int pin, char nutrient) {
  int sum = 0;
  for(int i = 0; i < NUM_SAMPLES; i++) {
    sum += analogRead(pin);
    delay(10);
  }
  float voltage = (sum / NUM_SAMPLES) * (3.3 / 4095.0);
  float concentration = voltageToConcentration(voltage, nutrient);
  return temperatureCompensate(concentration);
}`}
                      </pre>
                    </div>
                    <div className="bg-white p-4 rounded border border-green-200">
                      <h4 className="text-green-900 mb-2">CalibrationModule.cpp</h4>
                      <p className="text-gray-700 text-sm mb-3">Implements multi-point calibration and stores coefficients in EEPROM.</p>
                      <pre className="text-xs text-gray-800 bg-gray-50 p-3 rounded overflow-x-auto">
{`float CalibrationModule::voltageToConcentration(float v, char nutrient) {
  Coefficients c = getCoefficients(nutrient);
  float logC = c.a0 + c.a1*v + c.a2*v*v + c.a3*v*v*v;
  return pow(10, logC);
}`}
                      </pre>
                    </div>
                    <div className="bg-white p-4 rounded border border-green-200">
                      <h4 className="text-green-900 mb-2">CommunicationModule.cpp</h4>
                      <p className="text-gray-700 text-sm mb-3">Manages Bluetooth LE connection and data packet transmission.</p>
                      <pre className="text-xs text-gray-800 bg-gray-50 p-3 rounded overflow-x-auto">
{`void CommunicationModule::sendData(SensorData data) {
  String json = "{";
  json += "\\"n\\":" + String(data.nitrogen) + ",";
  json += "\\"p\\":" + String(data.phosphorus) + ",";
  json += "\\"k\\":" + String(data.potassium) + ",";
  json += "\\"ph\\":" + String(data.pH);
  json += "}";
  bleCharacteristic.setValue(json.c_str());
  bleCharacteristic.notify();
}`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-gray-900 mb-4">Main Loop Structure</h3>
                <div className="bg-teal-50 p-6 rounded-lg">
                  <pre className="text-sm text-gray-800 bg-white p-4 rounded overflow-x-auto">
{`void loop() {
  // 1. Read sensors (every 5 seconds)
  if (millis() - lastReadTime > 5000) {
    SensorData data;
    data.nitrogen = sensorModule.readNPK(N_PIN, 'N');
    data.phosphorus = sensorModule.readNPK(P_PIN, 'P');
    data.potassium = sensorModule.readNPK(K_PIN, 'K');
    data.pH = sensorModule.readPH(PH_PIN);
    lastReadTime = millis();
    
    // 2. Transmit if connected
    if (bleConnected) {
      commModule.sendData(data);
    }
    
    // 3. Store locally if disconnected
    else {
      dataBuffer.store(data);
    }
  }
  
  // 4. Handle incoming commands
  if (bleAvailable()) {
    processCommand(bleRead());
  }
  
  // 5. Power management
  if (idleTime > SLEEP_THRESHOLD) {
    enterLightSleep();
  }
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Communication Protocol */}
        <div className="mb-12 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-green-500 to-teal-500 p-6">
            <div className="flex items-center space-x-3 text-white">
              <Radio size={32} />
              <h2>Wireless Communication Protocol</h2>
            </div>
          </div>
          <div className="p-8">
            <p className="text-gray-700 mb-6 leading-relaxed">
              NutriScan Pro uses Bluetooth Low Energy (BLE) for short-range communication and Wi-Fi for cloud connectivity (future feature).
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-gray-900 mb-4">Bluetooth Low Energy (BLE)</h3>
                <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-lg mb-4">
                  <h4 className="text-gray-900 mb-3">Why BLE?</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <span className="text-green-600 mt-1">&bull;</span>
                      <span><span className="text-gray-900">Low Power:</span> Consumes 10-100x less power than classic Bluetooth, crucial for battery operation</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-600 mt-1">&bull;</span>
                      <span><span className="text-gray-900">Fast Connection:</span> Connects in &lt;100ms compared to 6+ seconds for classic Bluetooth</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-600 mt-1">&bull;</span>
                      <span><span className="text-gray-900">Universal Support:</span> Available on all modern smartphones (iOS and Android)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-green-600 mt-1">&bull;</span>
                      <span><span className="text-gray-900">Sufficient Range:</span> 10-30 meter range adequate for field monitoring</span>
                    </li>
                  </ul>
                </div>

                <h4 className="text-gray-900 mb-3">BLE Service & Characteristic Structure</h4>
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded border-l-4 border-green-600">
                      <p className="text-green-900 mb-2">Service UUID: 0x180F (Custom NutriScan Service)</p>
                      <div className="ml-4 space-y-3 mt-3">
                        <div className="bg-green-50 p-3 rounded">
                          <p className="text-gray-900 text-sm mb-1">Characteristic 1: Sensor Data (Read, Notify)</p>
                          <p className="text-gray-700 text-xs">UUID: 0x2A19 - Transmits NPK and pH values as JSON</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded">
                          <p className="text-gray-900 text-sm mb-1">Characteristic 2: Command (Write)</p>
                          <p className="text-gray-700 text-xs">UUID: 0x2A1A - Receives commands (calibrate, sleep, etc.)</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded">
                          <p className="text-gray-900 text-sm mb-1">Characteristic 3: Device Info (Read)</p>
                          <p className="text-gray-700 text-xs">UUID: 0x2A1B - Returns firmware version, battery level</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-gray-900 mb-4">Data Packet Format</h3>
                <p className="text-gray-700 mb-4">
                  Data is transmitted as compact JSON for human readability and easy parsing:
                </p>
                <div className="bg-teal-50 p-6 rounded-lg">
                  <pre className="text-sm text-gray-800 bg-white p-4 rounded overflow-x-auto">
{`{
  "timestamp": 1702051200,
  "n": 42.5,
  "p": 28.3,
  "k": 185.7,
  "ph": 6.4,
  "temp": 24.5,
  "battery": 87
}`}
                  </pre>
                  <div className="mt-4 text-gray-700 text-sm space-y-1">
                    <p>&bull; <span className="text-gray-900">timestamp:</span> Unix timestamp (seconds since 1970)</p>
                    <p>&bull; <span className="text-gray-900">n, p, k:</span> Nutrient concentrations in mg/kg</p>
                    <p>&bull; <span className="text-gray-900">ph:</span> Soil pH (0-14 scale)</p>
                    <p>&bull; <span className="text-gray-900">temp:</span> Soil temperature in °C</p>
                    <p>&bull; <span className="text-gray-900">battery:</span> Battery percentage (0-100)</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-gray-900 mb-4">Connection Management</h3>
                <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-lg">
                  <ol className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-3">
                      <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5 text-sm">1</span>
                      <div>
                        <span className="text-gray-900">Advertising:</span> ESP32 broadcasts its presence with device name "NutriScan-XXXX"
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5 text-sm">2</span>
                      <div>
                        <span className="text-gray-900">Pairing:</span> Mobile app initiates connection, performs device authentication
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5 text-sm">3</span>
                      <div>
                        <span className="text-gray-900">Service Discovery:</span> App queries available services and characteristics
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5 text-sm">4</span>
                      <div>
                        <span className="text-gray-900">Notification Enable:</span> App subscribes to sensor data notifications
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5 text-sm">5</span>
                      <div>
                        <span className="text-gray-900">Data Stream:</span> ESP32 sends updates every 5 seconds automatically
                      </div>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5 text-sm">6</span>
                      <div>
                        <span className="text-gray-900">Disconnection:</span> Graceful disconnect with data buffering for reconnection
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Application */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-green-500 to-teal-500 p-6">
            <div className="flex items-center space-x-3 text-white">
              <Smartphone size={32} />
              <h2>Mobile Application Development</h2>
            </div>
          </div>
          <div className="p-8">
            <p className="text-gray-700 mb-6 leading-relaxed">
              The NutriScan Pro mobile app provides an intuitive interface for viewing soil data and receiving recommendations. Built with React Native for cross-platform compatibility.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-gray-900 mb-4">Technology Stack</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="text-green-900 mb-2">React Native</h4>
                    <p className="text-gray-700 text-sm">Cross-platform framework enabling single codebase for iOS and Android, reducing development time by 50%.</p>
                  </div>
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <h4 className="text-teal-900 mb-2">React Native BLE Manager</h4>
                    <p className="text-gray-700 text-sm">Library for Bluetooth communication, handles connection, scanning, and data transfer.</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="text-green-900 mb-2">Redux</h4>
                    <p className="text-gray-700 text-sm">State management for sensor data, user preferences, and historical readings.</p>
                  </div>
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <h4 className="text-teal-900 mb-2">Victory Native</h4>
                    <p className="text-gray-700 text-sm">Charting library for visualizing NPK trends over time.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-gray-900 mb-4">App Architecture</h3>
                <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-lg">
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded border border-green-200">
                      <h4 className="text-green-900 mb-2">BLE Service Layer</h4>
                      <p className="text-gray-700 text-sm mb-3">Manages device connection and data streaming:</p>
                      <pre className="text-xs text-gray-800 bg-gray-50 p-3 rounded overflow-x-auto">
{`class BLEService {
  async scanDevices() {
    return await BleManager.scan(['180F'], 5);
  }
  
  async connectToDevice(deviceId) {
    await BleManager.connect(deviceId);
    await BleManager.retrieveServices(deviceId);
    this.startNotifications();
  }
  
  startNotifications() {
    BleManager.startNotification(deviceId, '180F', '2A19')
      .then(() => {
        BleManager.addListener('BleManagerDidUpdateValueForCharacteristic',
          this.handleDataUpdate);
      });
  }
}`}
                      </pre>
                    </div>
                    <div className="bg-white p-4 rounded border border-teal-200">
                      <h4 className="text-teal-900 mb-2">Data Processing Layer</h4>
                      <p className="text-gray-700 text-sm mb-3">Parses incoming data and updates application state:</p>
                      <pre className="text-xs text-gray-800 bg-gray-50 p-3 rounded overflow-x-auto">
{`handleDataUpdate(data) {
  const sensorData = JSON.parse(data.value);
  
  // Update Redux store
  store.dispatch(updateSensorData(sensorData));
  
  // Save to local storage
  AsyncStorage.setItem('latestReading', JSON.stringify(sensorData));
  
  // Trigger recommendation engine
  this.generateRecommendations(sensorData);
}`}
                      </pre>
                    </div>
                    <div className="bg-white p-4 rounded border border-green-200">
                      <h4 className="text-green-900 mb-2">Recommendation Engine</h4>
                      <p className="text-gray-700 text-sm mb-3">Implements the algorithm from the Mathematics section:</p>
                      <pre className="text-xs text-gray-800 bg-gray-50 p-3 rounded overflow-x-auto">
{`generateRecommendations(data) {
  const cropData = getCropRequirements(selectedCrop);
  const recommendations = [];
  
  // Check each nutrient
  ['n', 'p', 'k'].forEach(nutrient => {
    const deficiency = calculateDeficiency(
      data[nutrient], 
      cropData[nutrient].min, 
      cropData[nutrient].max
    );
    
    if (deficiency > 5) {  // >5% deficiency threshold
      recommendations.push({
        nutrient: nutrient.toUpperCase(),
        deficiency: deficiency,
        dosage: calculateDosage(deficiency, fieldArea),
        priority: deficiency * cropData.weights[nutrient]
      });
    }
  });
  
  return recommendations.sort((a, b) => b.priority - a.priority);
}`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-gray-900 mb-4">User Interface Screens</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white border-2 border-green-200 rounded-lg p-6">
                    <h4 className="text-green-900 mb-3">Dashboard Screen</h4>
                    <ul className="text-gray-700 text-sm space-y-2">
                      <li>&bull; Real-time NPK and pH values with color-coded status</li>
                      <li>&bull; Battery and connection indicators</li>
                      <li>&bull; Quick action buttons (calibrate, export data)</li>
                      <li>&bull; Trend graphs showing last 7 days</li>
                    </ul>
                  </div>
                  <div className="bg-white border-2 border-teal-200 rounded-lg p-6">
                    <h4 className="text-teal-900 mb-3">Recommendations Screen</h4>
                    <ul className="text-gray-700 text-sm space-y-2">
                      <li>&bull; Prioritized list of nutrient deficiencies</li>
                      <li>&bull; Specific fertilizer types and amounts</li>
                      <li>&bull; Application timing recommendations</li>
                      <li>&bull; pH adjustment suggestions</li>
                    </ul>
                  </div>
                  <div className="bg-white border-2 border-green-200 rounded-lg p-6">
                    <h4 className="text-green-900 mb-3">History Screen</h4>
                    <ul className="text-gray-700 text-sm space-y-2">
                      <li>&bull; Historical data with date filters</li>
                      <li>&bull; Comparison charts (before/after fertilization)</li>
                      <li>&bull; Export to CSV for record keeping</li>
                      <li>&bull; Photo attachment for field notes</li>
                    </ul>
                  </div>
                  <div className="bg-white border-2 border-teal-200 rounded-lg p-6">
                    <h4 className="text-teal-900 mb-3">Settings Screen</h4>
                    <ul className="text-gray-700 text-sm space-y-2">
                      <li>&bull; Crop selection and growth stage</li>
                      <li>&bull; Field area configuration</li>
                      <li>&bull; Sensor calibration wizard</li>
                      <li>&bull; Units preference (metric/imperial)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-lg border-l-4 border-green-500">
                <h4 className="text-green-900 mb-3">Offline Functionality</h4>
                <p className="text-gray-700 mb-3">
                  Recognizing that many farms have limited internet connectivity, the app is designed to function fully offline:
                </p>
                <ul className="text-gray-700 space-y-2">
                  <li>&bull; All sensor data stored locally using AsyncStorage</li>
                  <li>&bull; Recommendation database embedded in app (no API calls needed)</li>
                  <li>&bull; Data syncs to cloud when connection available (future feature)</li>
                  <li>&bull; Offline maps for field location tagging</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}