export default {
  name: 'FeaturesSection',
  setup() {
    const features = [
      { key: 'iotSensors', icon: 'sensor' },
      { key: 'cloudStorage', icon: 'cloud' },
      { key: 'realTimeMonitor', icon: 'monitor' },
      { key: 'maintenanceAlerts', icon: 'alert' },
      { key: 'analyticDashboard', icon: 'dashboard' },
      { key: 'jwtSecurity', icon: 'security' }
    ]

    return { features }
  }
}
