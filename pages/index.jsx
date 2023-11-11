import { useRef, useState } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import PoemGenerator from "../components/PoemGenerator";
import StoryGenerator from "../components/StoryGenerator";

export default function Home() {
  const [activeTab, setActiveTab] = useState("form1");
  return (
    <Layout>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4">
          <div className="text-large">
            Crafting narratives for a more positive future.
          </div>
          <div className="">
            We are always looking for project contributors.{" "}
            <Link href="https://github.com/tiny-factories/positive-futures/issues">
              Find out how to get involved.
            </Link>
          </div>
        </div>
        {/* Forms */}
        <div className="bg-tan bg-opacity-50 rounded">
          <div className="">
            <div className="">
              <div className="flex cursor-pointer justify-around">
                {/* Tab 1 */}
                <div
                  className={`mr-1 -mb-px p-2 rounded w-1/2 justify-center ${
                    activeTab === "form1" ? "bg-tan font-medium" : ""
                  }`}
                  onClick={() => setActiveTab("form1")}
                >
                  Poem{" "}
                </div>

                {/* Tab 2 */}
                <div
                  className={`mr-1 -mb-px p-2 rounded w-1/2 justify-center ${
                    activeTab === "form2" ? "bg-tan font-medium" : ""
                  }`}
                  onClick={() => setActiveTab("form2")}
                >
                  Form 2
                </div>
              </div>
            </div>
            <div className="bg-tan p-4">
              {/* Conditional rendering based on activeTab */}
              {activeTab === "form1" ? (
                <div>
                  {/* Form 1 Content */}
                  <PoemGenerator />

                  {/* Add your form fields here */}
                </div>
              ) : (
                <div>
                  {/* Form 2 Content */}
                  <StoryGenerator />

                  {/* Add your form fields here */}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className=""></div>
      </div>
    </Layout>
  );
}
