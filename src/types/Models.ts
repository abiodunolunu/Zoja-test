export interface User {
  id: number;
  name: string;
  email: string;
  organization_id: null;
  email_verified_at: null;
  created_at: Date;
  updated_at: Date;
  initial: null;
  staff_num: null;
  grade: null;
  job_title: null;
  resumption_date: null;
  induction_date: null;
  assessment_date: null;
  date_of_probation_assessment: null;
  job_description: null;
  salary: null;
  employee_type: null;
  role: null;
  line_manager: null;
  department_id: null;
  department_name: null;
  roles: Role[];
}

export interface Role {
  id: number;
  name: string;
  guard_name: string;
  created_at: Date;
  updated_at: Date;
  organization_id: null;
  pivot: Pivot;
}

export interface Pivot {
  model_id: number;
  role_id: number;
  model_type: string;
}
