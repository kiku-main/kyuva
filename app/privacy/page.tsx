export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white py-24 px-6">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

                <div className="prose prose-invert prose-lg">
                    <p className="text-[#888] text-lg mb-8">
                        <strong>Effective Date:</strong> January 5, 2026
                    </p>

                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Overview</h2>
                    <p className="text-[#888] mb-4">
                        Kyuva is a teleprompter application developed by KikuAI. We are committed to protecting your privacy.
                        This policy explains how we handle your data.
                    </p>

                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Data Collection</h2>
                    <p className="text-[#888] mb-4">
                        <strong className="text-white">Nothing.</strong> Kyuva does not collect, store, or transmit any personal data.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-6 mb-3">Local Data Only</h3>
                    <ul className="text-[#888] space-y-2 mb-4">
                        <li><strong className="text-white">Scripts:</strong> Stored locally on your Mac in ~/Library/Application Support/Kyuva/</li>
                        <li><strong className="text-white">Settings:</strong> Stored in macOS UserDefaults</li>
                        <li><strong className="text-white">No Cloud Sync:</strong> We do not sync any data to external servers</li>
                    </ul>

                    <h3 className="text-xl font-semibold text-white mt-6 mb-3">Audio Processing</h3>
                    <ul className="text-[#888] space-y-2 mb-4">
                        <li><strong className="text-white">Voice-Follow Mode:</strong> Uses your Mac&apos;s microphone to detect speech</li>
                        <li><strong className="text-white">100% On-Device:</strong> All audio processing happens locally</li>
                        <li><strong className="text-white">Never Transmitted:</strong> Your voice is never recorded, stored, or sent anywhere</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Third-Party Services</h2>
                    <p className="text-[#888] mb-4">
                        Kyuva does not integrate with any third-party analytics, advertising, or tracking services.
                        The only external service used is Apple StoreKit for processing In-App Purchases.
                    </p>

                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Data Security</h2>
                    <p className="text-[#888] mb-4">
                        Since all data remains on your device, your scripts are as secure as your Mac.
                        No network transmission means no interception risk. Deleting the app removes all local data.
                    </p>

                    <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Contact</h2>
                    <p className="text-[#888] mb-4">
                        For privacy questions: <a href="mailto:privacy@kikuai.dev" className="text-[#22c55e] hover:underline">privacy@kikuai.dev</a>
                    </p>

                    <div className="mt-12 pt-8 border-t border-white/10">
                        <p className="text-[#666] text-sm">
                            <strong>Summary:</strong> Kyuva is a privacy-first app. We collect nothing. Everything stays on your Mac.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}
