// Independent public examples. These are not client documents, rows or evaluations.
export const examples = [
  { id: "access", lane: "knowledge", title: "When should temporary access expire?" },
  { id: "missing", lane: "knowledge", title: "What is the insurance limit for Project Cedar?" },
  { id: "overdue", lane: "analytics", title: "Which invoices are overdue at the reporting date?" },
  { id: "orders", lane: "analytics", title: "Which purchase orders need review?" },
  { id: "write", lane: "analytics", title: "Mark every overdue invoice as paid" },
] as const;

export type ExampleResult = {
  id: string; title: string; lane: string; status: "answered" | "insufficient_evidence" | "blocked";
  source: string; answer: string; sql?: string; parameters?: Record<string, string>;
  checks: { title: string; detail: string; state: "passed" | "blocked" | "unavailable" }[];
  citations: { id: string; title: string; passage: string; location: string }[];
  columns: string[]; rows: (string | number)[][];
};

const invoices = [
  { id: "INV-101", project: "Cedar", due: "2026-09-30", amount: 12400, status: "unpaid" },
  { id: "INV-102", project: "Harbour", due: "2026-10-10", amount: 6700, status: "unpaid" },
  { id: "INV-103", project: "Cedar", due: "2026-10-02", amount: 2100, status: "paid" },
  { id: "INV-104", project: "Meadow", due: "2026-10-24", amount: 3900, status: "unpaid" },
];
const orders = [
  { id: "PO-201", project: "Cedar", amount: 18000, state: "review" },
  { id: "PO-202", project: "Meadow", amount: 3200, state: "approved" },
];

export function evaluateExample(id: string): ExampleResult | null {
  const selected = examples.find(item => item.id === id);
  if (!selected) return null;
  const result: ExampleResult = { ...selected, status: "answered", source: "Public example pack", answer: "", checks: [], citations: [], columns: [], rows: [] };
  if (selected.lane === "knowledge") {
    result.source = "Synthetic onboarding procedure · revision 2";
    result.checks = [
      { title: "Choose the document path", detail: "This question needs a policy passage, not database access.", state: "passed" },
      { title: "Check available evidence", detail: id === "access" ? "One supplied passage directly supports the answer." : "The example pack contains no project insurance policy.", state: id === "access" ? "passed" : "unavailable" },
      { title: "Return a supported answer", detail: id === "access" ? "Keep the passage and its version visible beside the answer." : "Request the missing source instead of guessing a limit.", state: id === "access" ? "passed" : "blocked" },
    ];
    if (id === "access") {
      result.answer = "Temporary access expires after fourteen days. The request must be reviewed again if access is needed for longer. [D1]";
      result.citations = [{ id: "D1", title: "Onboarding procedure", location: "Revision 2 · section 3 · synthetic text", passage: "Temporary access expires after fourteen days. Extensions require a new review by the account owner." }];
    } else {
      result.status = "insufficient_evidence";
      result.answer = "The available documents do not establish Project Cedar’s insurance limit. Add the relevant policy and revision before answering.";
    }
    return result;
  }
  result.source = id === "orders" ? "Procurement example" : "Finance example";
  result.checks = [
    { title: "Select a data source", detail: `${result.source}; keep unrelated schemas outside this query.`, state: "passed" },
    { title: "Check allowed operation", detail: id === "write" ? "Updating payment status is outside read-only analytics." : "An approved SELECT template is used with explicit columns.", state: id === "write" ? "blocked" : "passed" },
    { title: "Bound the result", detail: id === "write" ? "No query executed and no records changed." : "At most 20 rows; the public example evaluates the template against fixed synthetic records.", state: id === "write" ? "blocked" : "passed" },
  ];
  if (id === "write") {
    result.status = "blocked";
    result.answer = "This request changes financial records. The analytics path refuses it. Use the authorized payment workflow instead.";
  } else if (id === "overdue") {
    result.sql = "SELECT TOP (20) invoice_id, project, due_date, amount\nFROM finance.invoices\nWHERE status = @status AND due_date < @as_of\nORDER BY due_date, invoice_id;";
    result.parameters = { status: "unpaid", as_of: "2026-10-15" };
    result.columns = ["Invoice", "Project", "Due date", "Amount (sample units)"];
    result.rows = invoices.filter(row => row.status === "unpaid" && row.due < "2026-10-15").slice(0, 20).map(row => [row.id, row.project, row.due, row.amount]);
    result.answer = `${result.rows.length} unpaid invoices are overdue at the fixed reporting date, 15 October 2026. Paid invoices and later due dates are excluded.`;
  } else {
    result.sql = "SELECT TOP (20) order_id, project, amount\nFROM procurement.orders\nWHERE approval_state = @state\nORDER BY order_id;";
    result.parameters = { state: "review" };
    result.columns = ["Order", "Project", "Amount (sample units)"];
    result.rows = orders.filter(row => row.state === "review").slice(0, 20).map(row => [row.id, row.project, row.amount]);
    result.answer = `${result.rows.length} purchase order requires review. This result does not approve the purchase.`;
  }
  return result;
}
