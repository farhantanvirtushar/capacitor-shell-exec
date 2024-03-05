import Foundation

@objc public class CapacitorShellExec: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
