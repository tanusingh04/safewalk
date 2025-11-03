"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { User, Heart, MapPin, AlertTriangle, FileText } from "lucide-react"

export default function PatientFormComponent() {
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    phone: "",
    emergencyContact: "VIT Bhopal University",
    emergencyPhone: "",

    // Address Information
    address: "VIT Bhopal University",
    city: "",
    state: "",
    zipCode: "",

    // Medical Information
    bloodType: "",
    allergies: "",
    medications: "",
    medicalConditions: "",
    primaryDoctor: "",
    doctorPhone: "",
    insurance: "",
    policyNumber: "",

    // Emergency Preferences
    preferredHospital: "",
    specialInstructions: "",

    // Consent
    consentToShare: false,
    consentToContact: false,
  })

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, this would submit to a secure backend
    console.log("Form submitted:", formData)
    alert("Patient information has been securely saved. Thank you!")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <FileText className="h-10 w-10 text-blue-600" />
              <h1 className="text-3xl font-bold text-gray-900">Patient Details Form</h1>
            </div>
            <p className="text-lg text-gray-600">Secure medical information for emergency responders</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-blue-700">
                  <User className="h-6 w-6" />
                  <span>Personal Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                    <Input
                      id="dateOfBirth"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="gender">Gender</Label>
                    <Select onValueChange={(value) => handleInputChange("gender", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                        <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="emergencyContact">Emergency Contact Name *</Label>
                    <Input
                      id="emergencyContact"
                      value={formData.emergencyContact}
                      onChange={(e) => handleInputChange("emergencyContact", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="emergencyPhone">Emergency Contact Phone *</Label>
                    <Input
                      id="emergencyPhone"
                      type="tel"
                      value={formData.emergencyPhone}
                      onChange={(e) => handleInputChange("emergencyPhone", e.target.value)}
                      required
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Address Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-green-700">
                  <MapPin className="h-6 w-6" />
                  <span>Address Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="address">Street Address *</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    required
                  />
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => handleInputChange("city", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="state">State *</Label>
                    <Input
                      id="state"
                      value={formData.state}
                      onChange={(e) => handleInputChange("state", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="zipCode">ZIP Code *</Label>
                    <Input
                      id="zipCode"
                      value={formData.zipCode}
                      onChange={(e) => handleInputChange("zipCode", e.target.value)}
                      required
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Medical Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-red-700">
                  <Heart className="h-6 w-6" />
                  <span>Medical Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="bloodType">Blood Type</Label>
                    <Select onValueChange={(value) => handleInputChange("bloodType", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select blood type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="A+">A+</SelectItem>
                        <SelectItem value="A-">A-</SelectItem>
                        <SelectItem value="B+">B+</SelectItem>
                        <SelectItem value="B-">B-</SelectItem>
                        <SelectItem value="AB+">AB+</SelectItem>
                        <SelectItem value="AB-">AB-</SelectItem>
                        <SelectItem value="O+">O+</SelectItem>
                        <SelectItem value="O-">O-</SelectItem>
                        <SelectItem value="unknown">Unknown</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="insurance">Insurance Provider</Label>
                    <Input
                      id="insurance"
                      value={formData.insurance}
                      onChange={(e) => handleInputChange("insurance", e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="allergies">Allergies (medications, foods, etc.)</Label>
                  <Textarea
                    id="allergies"
                    value={formData.allergies}
                    onChange={(e) => handleInputChange("allergies", e.target.value)}
                    placeholder="List any known allergies..."
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="medications">Current Medications</Label>
                  <Textarea
                    id="medications"
                    value={formData.medications}
                    onChange={(e) => handleInputChange("medications", e.target.value)}
                    placeholder="List all current medications with dosages..."
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="medicalConditions">Medical Conditions</Label>
                  <Textarea
                    id="medicalConditions"
                    value={formData.medicalConditions}
                    onChange={(e) => handleInputChange("medicalConditions", e.target.value)}
                    placeholder="List any chronic conditions, disabilities, or ongoing health issues..."
                    rows={3}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="primaryDoctor">Primary Doctor</Label>
                    <Input
                      id="primaryDoctor"
                      value={formData.primaryDoctor}
                      onChange={(e) => handleInputChange("primaryDoctor", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="doctorPhone">Doctor's Phone</Label>
                    <Input
                      id="doctorPhone"
                      type="tel"
                      value={formData.doctorPhone}
                      onChange={(e) => handleInputChange("doctorPhone", e.target.value)}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Preferences */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-orange-700">
                  <AlertTriangle className="h-6 w-6" />
                  <span>Emergency Preferences</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="preferredHospital">Preferred Hospital</Label>
                  <Input
                    id="preferredHospital"
                    value={formData.preferredHospital}
                    onChange={(e) => handleInputChange("preferredHospital", e.target.value)}
                    placeholder="Name of preferred hospital or medical facility"
                  />
                </div>

                <div>
                  <Label htmlFor="specialInstructions">Special Instructions</Label>
                  <Textarea
                    id="specialInstructions"
                    value={formData.specialInstructions}
                    onChange={(e) => handleInputChange("specialInstructions", e.target.value)}
                    placeholder="Any special instructions for emergency responders (mobility issues, communication needs, etc.)"
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Consent */}
            <Card>
              <CardHeader>
                <CardTitle className="text-purple-700">Consent & Privacy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="consentToShare"
                    checked={formData.consentToShare}
                    onCheckedChange={(checked) => handleInputChange("consentToShare", checked as boolean)}
                  />
                  <Label htmlFor="consentToShare" className="text-sm">
                    I consent to sharing this medical information with emergency responders and healthcare providers in
                    case of an emergency.
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="consentToContact"
                    checked={formData.consentToContact}
                    onCheckedChange={(checked) => handleInputChange("consentToContact", checked as boolean)}
                  />
                  <Label htmlFor="consentToContact" className="text-sm">
                    I consent to being contacted by emergency services or healthcare providers using the information
                    provided.
                  </Label>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Privacy Notice:</strong> This information is encrypted and stored securely. It will only be
                    accessed by authorized emergency responders and healthcare providers when needed for your care.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Submit Button */}
            <div className="text-center">
              <Button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-3 text-lg font-semibold"
                size="lg"
                disabled={!formData.consentToShare}
              >
                Save Patient Information
              </Button>
              <p className="text-sm text-gray-500 mt-2">All fields marked with * are required</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
